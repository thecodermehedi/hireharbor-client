import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import JobBanner from "../components/ui/JobBanner";
import JobDetailsTable from "../components/ui/JobDetailsTable";

const JobDetails = () => {
  const {id} = useParams();
  const axios = useAxios();
  const getJob = async () => {
    const res = await axios.get(`/job/${id}`);
    return res.data;
  };
  const {
    data: job,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["job", {id}],
    queryFn: getJob,
  });

  console.log(job);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const {
    banner,
    logo,
    company,
    title,
    poster,
    postermail,
    posted,
    category,
    location,
    aboutCompany,
    applicants,
    deadline,
    employmentType,
    experienceLevel,
    industries,
    jobFunctions,
    qualifications,
    responsibilities,
    salary,
  } = job;

  const hanldeApply = () => {
    console.log("Apply");
  };

  return (
    <section className="container  lg:mx-auto min-h-screen">
      <JobBanner
        banner={banner}
        logo={logo}
        company={company}
        title={title}
        location={location}
        salary={salary}
        deadline={deadline}
        applicants={applicants}
        hanldeApply={hanldeApply}
      />
      <JobDetailsTable
        posted={posted}
        poster={poster}
        postermail={postermail}
        employmentType={employmentType}
        experienceLevel={experienceLevel}
        category={category}
        industries={industries}
        qualifications={qualifications}
        responsibilities={responsibilities}
        jobFunctions={jobFunctions}
        aboutCompany={aboutCompany}
      />
      <div className="flex my-5 justify-center items-center">
        <button onClick={hanldeApply} className="button-animate">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default JobDetails;
