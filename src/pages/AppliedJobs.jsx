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
          onClick={() => generatePDF(targetRef, {filename: "appliedjobs.pdf"})}
          className="px-3 md:px-8 text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition md:text-lg"
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
        <div>
          <table className="table-auto w-full" ref={targetRef}>
            <thead className="bg-primary/30">
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
