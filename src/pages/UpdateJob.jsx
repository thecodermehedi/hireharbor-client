import BannerComponent from "../components/ui/BannerComponent";
import {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import {Helmet} from "react-helmet-async";
import ErrorComponent from "../components/ErrorComponent";
const UpdateJob = () => {
  const {id} = useParams();
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [updatedCategory, setUpdatedCategory] = useState();
  const [updatedDeadline, setUpdatedDeadline] = useState(new Date());

  const getJobCategories = async () => {
    const res = await axios.get("/categories");
    return res.data;
  };
  const {data: categories} = useQuery({
    queryKey: ["categories"],
    queryFn: getJobCategories,
  });

  const getJob = async () => {
    const res = await axios.get(`/job/${id}`);
    return res.data;
  };

  const {
    data: job,
    isLoading: isJobLoading,
    isError: isJobError,
    error: jobError,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: async () => await getJob(),
  });

  useEffect(() => {
    if (job) {
      setUpdatedDeadline(new Date(job?.deadline));
      setUpdatedCategory(job?.category);
    }
  }, [job]);

  const updateJob = async (updatedjob) => {
    const res = await axios.patch(`/postedjobs/${id}`, updatedjob);
    return res.data;
  };

  const {mutateAsync: updateJobFn} = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["job", id]});
    },
  });

  if (isJobLoading) {
    return <Loading />;
  }

  if (isJobError) {
    return <ErrorComponent error={jobError} />;
  }

  const {
    banner,
    logo,
    company,
    title,
    location,
    applicants,
    experienceLevel,
    salary,
    desc,
  } = job;

  const formattedDate = updatedDeadline.toISOString().slice(0, 10);
  const handleUpdateJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedjob = {
      company: form.companyName.value,
      logo: form.logoURL.value,
      banner: form.bannerURL.value,
      title: form.jobTitle.value,
      deadline: formattedDate,
      applicants: form.applicants.value,
      salary: form.salaryRange.value,
      category: updatedCategory,
      location: form.location.value,
      experienceLevel: form.experience.value,
      desc: form.desc.value,
    };

    const toastId = toast.loading("Updating...");
    try {
      await updateJobFn(updatedjob);
      toast.success("Job Updated Successfully", {id: toastId});
    } catch (error) {
      console.log(error);
      toast.error(error.message, {id: toastId});
    }
  };

  return (
    <section>
      <Helmet>
        <title>Update Job - HireHarbor</title>
      </Helmet>
      <BannerComponent
        title="Revise Your Job Posting"
        subTitle="Update details to attract the right candidates"
      />
      <div className="min-h-fit bg-black">
        <div className="flex flex-col w-full max-w-7xl mx-auto py-10">
          <form
            onSubmit={handleUpdateJob}
            className="px-10 lg:px-28  pt-10 my-8 mx-5 md:mx-0"
          >
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block  text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="companyName"
                >
                  Update Company Name
                </label>
                <input
                  className="w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none "
                  id="companyName"
                  type="text"
                  defaultValue={company}
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="jobTitle"
                >
                  Update Job Title
                </label>
                <input
                  className="w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none "
                  id="jobTitle"
                  type="text"
                  defaultValue={title}
                  required
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="category"
                >
                  Update Category
                </label>
                <select
                  className="select w-full rounded-2xl py-3 px-4 bg-neutral focus:outline-none border-none"
                  id="category"
                  value={updatedCategory}
                  onChange={(e) => setUpdatedCategory(e.target.value)}
                  required
                >
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat.value}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="salaryRange"
                >
                  Update Salary Range
                </label>
                <input
                  className=" w-full    rounded-2xl    py-3 px-4 bg-neutral  focus:outline-none  "
                  id="salaryRange"
                  type="text"
                  defaultValue={salary}
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="location"
                >
                  Update Location
                </label>
                <input
                  className="w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none "
                  id="location"
                  type="text"
                  defaultValue={location}
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="applicants"
                >
                  Update Total Applicants
                </label>
                <input
                  className="w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none "
                  id="applicants"
                  type="number"
                  defaultValue={applicants}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="experience"
                >
                  Update Experience Level
                </label>
                <input
                  className="rounded-2xl  py-3 px-4 bg-neutral  focus:outline-none "
                  id="experience"
                  type="text"
                  defaultValue={experienceLevel}
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block  text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="deadline"
                >
                  Update Deadline
                </label>
                <DatePicker
                  selected={updatedDeadline}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setUpdatedDeadline(date)}
                  className="w-full  rounded-2xl   py-3 px-4 bg-neutral  focus:outline-none cursor-pointer"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="logoURL"
                >
                  Update Company Logo
                </label>
                <input
                  className=" w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none "
                  id="logoURL"
                  type="url"
                  defaultValue={logo}
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="bannerURL"
                >
                  Update Job Banner
                </label>
                <input
                  className=" w-full rounded-2xl py-3 px-4 bg-neutral  focus:outline-none"
                  id="bannerURL"
                  type="url"
                  defaultValue={banner}
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="desc"
                >
                  Job Description
                </label>
                <textarea
                  className="w-full h-96 rounded-2xl py-3 px-4 bg-neutral  focus:outline-none resize-none overflow-hidden"
                  id="desc"
                  type="url"
                  defaultValue={desc}
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <button
                  className="btn bg-primary/50 rounded-2xl border-none transition-all duration-300 cursor-pointer  
                  hover: capitalize text-xl hover:bg-primary/70 w-full"
                >
                  Update Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateJob;
