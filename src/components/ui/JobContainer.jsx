import PropTypes from "prop-types";
import JobCard from "./JobCard";

const JobContainer = ({jobs}) => {
  // console.log(jobs);
  return (
    <section className=" my-10 mr-12 lg:mr-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {jobs?.slice(0, 6).map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

JobContainer.propTypes = {
  jobs: PropTypes.array,
};

export default JobContainer;
