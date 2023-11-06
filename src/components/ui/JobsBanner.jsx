import PropTypes from "prop-types";

const JobsBanner = ({handleJobSearch}) => {
  return (
    <div className="hero h-96 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            The Most Exciting Jobs
          </h1>
          <p className="py-6 text-lg md:text-xl lg:text-2xl">
            Your dream job is just a search away!
          </p>
          <form onSubmit={handleJobSearch} className="relative w-full">
            <input
              type="text"
              id="search"
              name="search"
              className="input focus:outline-none placeholder:text-whitish placeholder:text-opacity-30 border-none w-full pr-16 rounded-2xl bg-black lg:h-16 focus:placeholder:text-opacity-0  md:placeholder:text-lg lg:placeholder:text-xl "
              placeholder="Enter Job title"
            />
            <button
              type="submit"
              className="text-neutral font-semibold h-full bg-primary hover:bg-opacity-80 transition text-base md:text-xl border-none absolute top-0 right-0 rounded-2xl rounded-l-none px-2 md:px-3 lg:px-5"
            >
              Find Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

JobsBanner.propTypes = {
  handleJobSearch: PropTypes.func.isRequired,
};
export default JobsBanner;
