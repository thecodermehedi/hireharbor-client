import PropTypes from "prop-types";

const JobBanner = ({
  banner,
  logo,
  company,
  title,
  location,
  salary,
  deadline,
  applicants,
}) => {
  return (
    <>
      <div className="hero md:h-72 lg:h-96 overflow-hidden border border-t-0 border-b-0 border-gray-900 relative">
        <img src={banner} alt="banner" className="w-full rounded-2xl" />
        <img
          src={logo}
          alt="logo"
          className="w-12 md:w-24 absolute bottom-12"
        />
        <h3 className="absolute bottom-0 text-lg md:text-xl lg:text-2xl ">
          {company}
        </h3>
      </div>
      <div className="text-center space-y-4 border border-t-0 border-gray-900 rounded-2xl pb-10 rounded-t-none">
        <h1 className="text-2xl md:text-3xl lg:text-4xl pt-3 text-primary font-medium ">
          {title}
        </h1>
        <p className="md:text-lg lg:text-xl text-whitish text-opacity-50">
          {location}
        </p>
        <p className="md:text-lg lg:text-xl">
          {salary}{" "}
          <span className="text-primary/75 text-sm md:text-lg">/ Year</span>{" "}
        </p>
        <p className="md:text-lg lg:text-xl">
          Application Deadline :{" "}
          <span className="text-red-500">{deadline}</span>
        </p>
        <p className="md:text-lg lg:text-xl">
          Applicants: <span className="text-blue-500">{applicants}</span>
        </p>
      </div>
    </>
  );
};

JobBanner.propTypes = {
  banner: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  applicants: PropTypes.number.isRequired,
};

export default JobBanner;
