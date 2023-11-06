import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";

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

  return (
    <section className="container mx-auto mt-10">
      <div className="hero h-96 relative">
        <img src={job?.banner} alt="" className="w-full rounded-2xl"/>
        <div className="hero-overlay bg-opacity-20"></div>
      </div>
    </section>
  );
};

export default JobDetails;
