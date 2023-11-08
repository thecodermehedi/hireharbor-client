import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const PostedJobRow = ({job, isEvenRow, handleDeletePostedJob}) => {
  const {_id, title, company, category, deadline, salary, applicants} = job;

  return (
    <tr key={_id} className={!isEvenRow ? "bg-neutral" : "bg-black"}>
      <td className="px-5 py-3 capitalize hidden lg:table-cell">{company}</td>
      <td className=" px-5 py-3 capitalize">{title}</td>
      <td className=" px-5 py-3 capitalize">{category}</td>
      <td className=" px-5 py-3  hidden md:table-cell">{deadline}</td>
      <td className=" px-5 py-3 hidden lg:table-cell">{salary}</td>
      <td className=" px-5 py-3  hidden md:table-cell">{applicants}</td>
      <td className=" px-5 py-3 flex flex-col justify-center items-center gap-4">
        <Link to={`/updatejob/${_id}`}>
          <button className="px-5 md:px-8 text-whitish py-2 rounded-2xl bg-primary/30 hover:bg-primary/70 transition text-base ">
            Update
          </button>
        </Link>
        <button onClick={() => handleDeletePostedJob(_id)} className="px-5 md:px-8 text-whitish py-2 rounded-2xl bg-red-600/50 hover:bg-red-700/90 transition text-base ">
          Delete
        </button>
      </td>
    </tr>
  );
};

PostedJobRow.propTypes = {
  job: PropTypes.object.isRequired,
  isEvenRow: PropTypes.bool.isRequired,
  handleDeletePostedJob: PropTypes.func.isRequired,
};

export default PostedJobRow;
