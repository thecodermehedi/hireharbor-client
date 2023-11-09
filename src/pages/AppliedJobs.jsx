import BannerComponent from "../components/ui/BannerComponent";
import {useQuery} from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import AppliedJobRow from "../components/AppliedJobRow";
import {useState} from "react";
import Loading from "../components/Loading";
import {Helmet} from "react-helmet-async";
import ErrorComponent from "../components/ErrorComponent";
import {useRef} from "react";
import generatePDF from "react-to-pdf";
import toast from "react-hot-toast";

const AppliedJobs = () => {
  const axios = useAxios();
  const {user} = useAuth();
  const [category, setCategory] = useState("");
  const targetRef = useRef();

  const getJobCategories = async () => {
    const res = await axios.get("/categories");
    return res.data;
  };
  const {data: categories} = useQuery({
    queryKey: ["categories"],
    queryFn: getJobCategories,
  });

  const getAppliedJobs = async () => {
    const res = await axios.get(`/applications?email=${user?.email}`);
    return res.data;
  };

  const {
    data: appliedJobs,
    isLoading: isAppliedJobsLoading,
    isError: isAppliedJobsError,
    error: jobsError,
  } = useQuery({
    queryKey: ["appliedJobs", user?.email],
    queryFn: async () => getAppliedJobs(),
    enabled: !!user,
  });

  let filteredJobs = appliedJobs;
  if (category !== "") {
    filteredJobs = appliedJobs.filter((job) => job.category === category);
  }

  if (isAppliedJobsLoading) {
    return <Loading />;
  }
  if (isAppliedJobsError) {
    return <ErrorComponent error={jobsError} />;
  }

  const downloadPDF = () => {
    const promise = generatePDF(targetRef, {filename: "applied-jobs.pdf"});
    toast.promise(promise, {
      loading: "Generating PDF...",
      success: "PDF downloaded successfully",
      error: "Failed to download PDF",
    });
  };

  return (
    <section className="container mx-auto ">
      <Helmet>
        <title>Applied Jobs - HireHarbor</title>
      </Helmet>
      <BannerComponent
        title="Your Job Applications"
        subTitle="Track the progress of your career pursuits"
      />
      <div className="w-full lg:mx-auto my-5 flex justify-between items-center">
        <button
          onClick={downloadPDF}
          className="px-3 md:px-8 text-black font-semibold py-2 rounded-2xl bg-secondary hover:bg-primary transition md:text-lg"
        >
          Download Summary
        </button>
        <select
          className="select w-fit rounded-2xl py-3 px-4 bg-primary/10 focus:outline-none border-none text-right pr-10 md:text-lg"
          id="category"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories?.map((cat) => (
            <option
              key={cat._id}
              value={cat.value}
              className="bg-black border-none"
            >
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <section className="mb-20">
        <div className="rounded-2xl overflow-hidden">
          <table className="table-auto w-full" ref={targetRef}>
            <thead className="bg-primary text-blackish">
              <tr>
                <th className="px-5 py-3 hidden md:table-cell">Company</th>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3 hidden md:table-cell">Location</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3 hidden lg:table-cell">Experience</th>
                <th className="px-5 py-3">Deadline</th>
                <th className="px-5 py-3 hidden lg:table-cell">Salary Range</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs?.map((job, index) => (
                <AppliedJobRow
                  key={job._id}
                  job={job}
                  isEvenRow={index % 2 === 0}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default AppliedJobs;
