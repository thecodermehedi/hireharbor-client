import BannerComponent from "../components/ui/BannerComponent";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import PostedJobRow from "../components/PostedJobRow";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import {Helmet} from "react-helmet-async";
import ErrorComponent from "../components/ErrorComponent";

const PostedJobs = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {user} = useAuth();

  const getPostedJobs = async () => {
    const res = await axios.get(`/postedjobs?email=${user?.email}`);
    return res.data;
  };

  const {
    data: postedJobs,
    isLoading: isPostedJobsLoading,
    isError: isPostedJobsError,
    error: postedJobsError,
  } = useQuery({
    queryKey: ["postedJobs"],
    queryFn: async () => await getPostedJobs(),
    enabled: !!user?.email,
  });

  const deletePostedJob = async (id) => {
    const res = await axios.delete(`/postedjobs/${id}`);
    return res.data;
  };

  const {mutateAsync: deletePostedJobFn} = useMutation({
    mutationFn: deletePostedJob,
    onSuccess: () => {
      queryClient.invalidateQueries("postedJobs");
    },
  });

  const handleDeletePostedJob = (id) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you want to delete this job ?",
      icon: "warning",
      color: "#F2F2F2",
      iconColor: "#d33",
      showCancelButton: true,
      cancelButtonColor: "#1eb854",
      cancelButtonText: "No Cancel",
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes Delete",
      background: "#060908",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deletePostedJobFn(id);
          Swal.fire({
            title: "Deleted!",
            text: "Job deleted successfully",
            icon: "success",
            color: "#F2F2F2",
            background: "#060908",
            iconColor: "#1eb854",
            confirmButtonColor: "#1eb854",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
            color: "#F2F2F2",
            background: "#060908",
            iconColor: "#d33",
            confirmButtonColor: "#d33",
          });
        }
      }
    });
  };

  if (isPostedJobsLoading) {
    return <Loading />;
  }
  if (isPostedJobsError) {
    return <ErrorComponent error={postedJobsError} />;
  }

  return (
    <section className="container mx-auto">
      <Helmet>
        <title>My Jobs - HireHarbor</title>
      </Helmet>
      <BannerComponent
        title="Your Job Postings"
        subTitle="Manage and track your active job listings"
      />
      <section className="mb-20">
        <div>
          <table className="table-auto w-full overflow-x-hidden">
            <thead className="bg-primary/30">
              <tr>
                <th className="px-5 py-3 hidden lg:table-cell">Company</th>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3  hidden md:table-cell">Deadline</th>
                <th className="px-5 py-3 hidden lg:table-cell">Salary Range</th>
                <th className="px-5 py-3 hidden md:table-cell">Applicants</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {postedJobs?.map((job, index) => (
                <PostedJobRow
                  key={job._id}
                  job={job}
                  isEvenRow={index % 2 === 0}
                  handleDeletePostedJob={handleDeletePostedJob}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default PostedJobs;
