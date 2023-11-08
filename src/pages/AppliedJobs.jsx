import BannerComponent from "../components/ui/BannerComponent";
import {useQuery} from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import AppliedJobRow from "../components/AppliedJobRow";
import {useState} from "react";

const AppliedJobs = () => {
  const axios = useAxios();
  const {user} = useAuth();
  const [category, setCategory] = useState("");

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
    console.log(filteredJobs);
  }

  if (isAppliedJobsLoading) {
    return (
      <span className="loading loading-ring loading-lg text-primary/75"></span>
    );
  }
  if (isAppliedJobsError) {
    return <p>{jobsError.message}</p>;
  }
  return (
    <section className="container mx-auto ">
      <BannerComponent
        title="Your Job Applications"
        subTitle="Track the progress of your career pursuits"
      />
      <div className="max-w-xs w-fit mr-3 md:w-96 md:mr-5 my-5 ml-auto">
        <select
          className="select w-full rounded-2xl py-3 px-4 bg-primary/10 focus:outline-none border-none text-right pr-10"
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
          <table className="table-auto w-full overflow-x-hidden">
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
