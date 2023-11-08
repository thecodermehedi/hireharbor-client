import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import JobBanner from "../components/ui/JobBanner";
import JobDetailsTable from "../components/ui/JobDetailsTable";
import ApplyModal from "../components/ui/ApplyModal";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

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
    queryKey: ["job", id],
    queryFn: getJob,
  });


  if (isLoading) {
    return <Loading />;
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
    applicants,
    deadline,
    experienceLevel,
    desc,
    salary,
  } = job;

  return (
    <section className="container  lg:mx-auto min-h-screen">
      <Helmet>
        <title>{title} - HireHarbor</title>
      </Helmet>
      <JobBanner
        banner={banner}
        logo={logo}
        company={company}
        title={title}
        location={location}
        salary={salary}
        deadline={deadline}
        applicants={applicants}
      />
      <JobDetailsTable
        posted={posted}
        poster={poster}
        postermail={postermail}
        experienceLevel={experienceLevel}
        category={category}
        desc={desc}
      />
      <ApplyModal job={job} />
    </section>
  );
};

export default JobDetails;
