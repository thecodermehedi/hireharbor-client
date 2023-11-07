import PropTypes from "prop-types";

const JobDetailsTable = ({
  posted,
  poster,
  postermail,
  employmentType,
  experienceLevel,
  category,
  industries,
  qualifications,
  responsibilities,
  jobFunctions,
  aboutCompany,
}) => {
  return (
    <div className="flow-root rounded-2xl border border-gray-900 py-3 shadow-sm my-5 md:my-10">
      <dl className="-my-3 divide-y divide-gray-800 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Posted on</dt>
          <dd className="text-whitish/75 sm:col-span-2">{posted}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Posted by</dt>
          <dd className="text-whitish/75 sm:col-span-2">{poster}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Poster Email</dt>
          <dd className="text-whitish/75 sm:col-span-2">{postermail}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Employment</dt>
          <dd className="text-whitish/75 sm:col-span-2">{employmentType}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Experience</dt>
          <dd className="text-whitish/75 sm:col-span-2">{experienceLevel}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Type</dt>
          <dd className="text-whitish/75 sm:col-span-2 capitalize">
            {category}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Industries</dt>
          <dd className="text-whitish/75 sm:col-span-2 capitalize">
            {industries}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Qualifications</dt>
          <dd className="text-whitish/75 sm:col-span-2 capitalize">
            {qualifications}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Responsibilities</dt>
          <dd className="text-whitish/75 sm:col-span-2 capitalize">
            {responsibilities}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">Functions</dt>
          <dd className="text-whitish/75 sm:col-span-2 capitalize">
            {jobFunctions}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-neutral sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-whitish/90">About Company</dt>
          <dd className="text-whitish/75 sm:col-span-2">{aboutCompany}</dd>
        </div>
      </dl>
    </div>
  );
};

JobDetailsTable.propTypes = {
  posted: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  postermail: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  experienceLevel: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  industries: PropTypes.string.isRequired,
  qualifications: PropTypes.string.isRequired,
  responsibilities: PropTypes.string.isRequired,
  jobFunctions: PropTypes.string.isRequired,
  aboutCompany: PropTypes.string.isRequired,
};

export default JobDetailsTable;
