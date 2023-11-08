import BannerComponent from "../components/ui/BannerComponent";
import {useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Helmet} from "react-helmet-async";
const AddJob = () => {
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState("");
  const queryClient = useQueryClient();
  const {user} = useAuth();
  const axios = useAxios();
  const getJobCategories = async () => {
    const res = await axios.get("/categories");
    return res.data;
  };
  const {data: categories} = useQuery({
    queryKey: ["categories"],
    queryFn: getJobCategories,
  });

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);

  const postJob = async (job) => {
    const res = await axios.post("/jobs", job);
    return res.data;
  };

  const {mutateAsync: postJobFn} = useMutation({
    mutationFn: postJob,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["jobs"]});
    },
  });

  const handleAddJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const job = {
      company: form.companyName.value,
      logo: form.logoURL.value,
      banner: form.bannerURL.value,
      poster: user?.displayName,
      postermail: user?.email,
      title: form.jobTitle.value,
      posted: formattedDate,
      deadline: deadline,
      applicants: form.applicants.value,
      salary: form.salaryRange.value,
      category: category,
      location: form.location.value,
      experienceLevel: form.experience.value,
      desc: form.desc.value,
    };
    const toastId = toast.loading("Posting Job...");
    try {
      await postJobFn(job);
      toast.success("Job Posted Successfully", {id: toastId});
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", {id: toastId});
    }
  };

  return (
    <section>
      <Helmet>
        <title>Add Job - HireHarbor</title>
        <meta
          name="description"
          content="Add a job to HireHarbor to reach out to the best talents in the industry."
        />
      </Helmet>
      <BannerComponent
        title="Post Your Vacancy"
        subTitle="Reach out to the best talents in the industry"
      />
      <div className="min-h-fit bg-black">
        <div className="flex flex-col w-full max-w-7xl mx-auto py-10">
          <form
            onSubmit={handleAddJob}
            className="px-10 lg:px-28  pt-10 my-8 mx-5 md:mx-0"
          >
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block  text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  className="w-full   rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="companyName"
                  type="text"
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="yourName"
                >
                  Your Name
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="yourName"
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="jobTitle"
                >
                  Job Title
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="jobTitle"
                  type="text"
                  placeholder="Enter Job Title"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="yourEmail"
                >
                  Your Email
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="yourEmail"
                  type="text"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="category"
                >
                  Job Category
                </label>
                <select
                  className="select w-full   rounded-2xl  py-3 px-4 bg-neutral  focus:outline-none border-none"
                  id="category"
                  required
                  onChange={(e) => setCategory(e.target.value)}
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
                  Salary Range
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none  placeholder:"
                  id="salaryRange"
                  type="text"
                  placeholder="Enter Salary Range"
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
                  Location
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="applicants"
                >
                  Total Applicants
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="applicants"
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="experience"
                >
                  Experience Level
                </label>
                <input
                  className="    rounded-2xl placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="experience"
                  type="text"
                  placeholder="Enter Experience Level"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="deadline"
                >
                  Enter Deadline
                </label>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
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
                  Company Logo
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="logoURL"
                  type="url"
                  placeholder="Enter Company Logo URL"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="bannerURL"
                >
                  Job Banner
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="bannerURL"
                  type="url"
                  placeholder="Enter Job Banner URL"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="desc"
                >
                  Job Description
                </label>
                <textarea
                  className="w-full h-96   rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none resize-none overflow-hidden"
                  id="desc"
                  type="url"
                  placeholder="Enter Job Description"
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
                  Publish Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
