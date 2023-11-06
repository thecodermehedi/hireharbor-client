import {Link} from "react-router-dom";
import createSlug from "../utils/createSlug";
import PropTypes from "prop-types";

const JobRow = ({job, isEvenRow}) => {
  const {_id, title, poster, posted, deadline, salary} = job;
  const slug = createSlug(title);
  return (
    <tr key={_id} className={!isEvenRow ? "bg-neutral" : "bg-black"}>
      <td className="px-5 py-3 capitalize">{poster}</td>
      <td className=" px-5 py-3 capitalize">{title}</td>
      <td className=" px-5 py-3">{posted}</td>
      <td className=" px-5 py-3">{deadline}</td>
      <td className=" px-5 py-3">{salary}</td>
      <td className=" px-5 py-3">
        <Link to={`/job/${slug}/${_id}`}>
          <button className="px-5 md:px-8 text-whitish py-2 rounded-2xl bg-primary/30 hover:bg-primary/70 transition text-base ">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

JobRow.propTypes = {
  job: PropTypes.object.isRequired,
  isEvenRow: PropTypes.bool.isRequired,
};

export default JobRow;
