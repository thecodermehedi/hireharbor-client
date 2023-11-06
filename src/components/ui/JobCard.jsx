import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import createSlug from "../../utils/createSlug";

const JobCard = ({job}) => {
  const {_id, title, poster, posted, deadline, salary, applicants} = job;
  // console.log(salary);
  const slug = createSlug(title);
  return (
    <div className="bg-black rounded-2xl p-5 w-full">
      <h2 className="text-primary/80 text-lg  capitalize">{title}</h2>
      <p className="text-whitish/50  font-bold">
        Posted by:{" "}
        <span className="capitalize font-normal text-whitish/75">{poster}</span>
      </p>
      <p className="text-whitish/50 font-bold">
        Posted on: <span className="font-normal text-whitish/75">{posted}</span>
      </p>
      <p className="text-whitish/50 font-bold">
        Deadline:<span className="font-normal text-whitish/75">{deadline}</span>
      </p>
      <p className="text-whitish/50 font-bold">
        Salary range:{" "}
        <span className="font-normal text-whitish/75">{salary}</span>
      </p>
      <p className="text-whitish/50 font-bold">
        Total applicants:{" "}
        <span className="font-normal text-whitish/75">{applicants}</span>
      </p>
      <Link to={`/job/${slug}/${_id}`}>
        <button className="px-5 md:px-8 mt-5 text-whitish py-2 rounded-2xl bg-primary/70 hover:bg-primary/30 transition text-base ">
          View Details
        </button>
      </Link>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
