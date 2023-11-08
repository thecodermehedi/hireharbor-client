import JobRow from "../JobRow";
import {useQuery} from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import JobCard from "./JobCard";
import PropTypes from "prop-types";
import Loading from "../Loading";

const JobsTable = ({searchFieldValue}) => {
  const axios = useAxios();
  const getJobs = async () => {
    const res = await axios.get("/jobs");
    return res.data;
  };
  const {
    data: jobs,
    isLoading: isJobsLoading,
    isError: isJobsError,
    error: jobsError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => await getJobs(),
  });

  const isJobFound = jobs?.some((job) =>
    job.title.toLowerCase().includes(searchFieldValue.toLowerCase())
  );
  const filteredJobs = isJobFound
    ? jobs?.filter((job) =>
        job.title.toLowerCase().includes(searchFieldValue.toLowerCase())
      )
    : jobs;

  if (isJobsLoading) {
    return <Loading />;
  }

  if (isJobsError) {
    return <span>Error: {jobsError.message}</span>;
  }

  return (
    <section className="mb-20">
      <div className="hidden lg:block">
        <table className="table-auto w-full">
          <thead className="bg-primary/30">
            <tr>
              <th className="px-5 py-3">By</th>
              <th className="px-5 py-3">Job Title</th>
              <th className="px-5 py-3">Posting Date</th>
              <th className="px-5 py-3">Deadline</th>
              <th className="px-5 py-3">Salary Range</th>
              <th className="px-5 py-3">More Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs?.map((job, index) => (
              <JobRow key={job._id} job={job} isEvenRow={index % 2 === 0} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-5 lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {filteredJobs?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

JobsTable.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
};
export default JobsTable;
