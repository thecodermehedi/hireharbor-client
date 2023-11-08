import PropTypes from "prop-types";

const AppliedJobRow = ({job, isEvenRow}) => {
  const {_id, title, company, category, deadline, salary, experienceLevel, location} =
    job;
  return (
    <tr key={_id} className={!isEvenRow ? "bg-neutral" : "bg-black"}>
      <td className="px-5 py-3 hidden md:table-cell">{company}</td>
      <td className=" px-5 py-3">{title}</td>
      <td className=" px-5 py-3  hidden md:table-cell">{location}</td>
      <td className=" px-5 py-3 capitalize">{category}</td>
      <td className=" px-5 py-3 hidden lg:table-cell">{experienceLevel}</td>
      <td className=" px-5 py-3">{deadline}</td>
      <td className=" px-5 py-3 hidden lg:table-cell">{salary}</td>
    </tr>
  );
};

AppliedJobRow.propTypes = {
  job: PropTypes.object.isRequired,
  isEvenRow: PropTypes.bool.isRequired,
};

export default AppliedJobRow;
