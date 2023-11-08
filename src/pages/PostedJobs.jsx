import BannerComponent from "../components/ui/BannerComponent";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import PostedJobRow from "../components/PostedJobRow";
import toast from "react-hot-toast";

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

  const handleDeletePostedJob = async (id) => {
    try {
      await deletePostedJobFn(id);
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="container mx-auto">
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
              {isPostedJobsLoading ? (
                <span className="loading loading-ring loading-lg text-primary/75"></span>
              ) : isPostedJobsError ? (
                <p>{postedJobsError.message}</p>
              ) : (
                postedJobs?.map((job, index) => (
                  <PostedJobRow
                    key={job._id}
                    job={job}
                    isEvenRow={index % 2 === 0}
                    handleDeletePostedJob={handleDeletePostedJob}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default PostedJobs;
