import {useQuery} from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Tab from "./Tab";
import {useState} from "react";
import JobContainer from "../ui/JobContainer";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TabContainer = () => {
  const axios = useAxios();
  const [activeTab, setActiveTab] = useState(0);
  const getJobCategories = async () => {
    const res = await axios.get("/categories");
    return res.data;
  };
  const {data: categories, isLoading: isCatLoading} = useQuery({
    queryKey: ["categories"],
    queryFn: getJobCategories,
  });

  const activeCategoryValue = categories?.[activeTab]?.value;
  const getJobs = async (category) => {
    const res = await axios.get(`/jobs?category=${category}`);
    return res.data;
  };

  const {
    data: jobs,
    isLoading: isJobsLoading,
    isError: isJobsError,
    error: jobsError,
  } = useQuery({
    queryKey: ["jobs", activeCategoryValue],
    queryFn: async () => await getJobs(activeCategoryValue),
    enabled: !!categories,
  });

  if (isJobsLoading) return <Loading />;
  if (isJobsError) return <ErrorComponent error={jobsError} />;

  const tabArray = new Array(5).fill(0);

  return (
    <section>
      <div className="lg:w-fit bg-neutral p-2 rounded-2xl hidden md:flex  gap-4">
        <div className="md:flex items-center space-x-4 hidden ">
          {isCatLoading &&
            tabArray.map((_, index) => (
              <div key={index}>
                <Skeleton
                  width={120}
                  height={50}
                  className="rounded-2xl animate-pulse"
                />
              </div>
            ))}
        </div>
        {categories?.map((cat, index) => (
          <Tab
            key={cat._id}
            name={cat.name}
            index={index}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        ))}
      </div>
      <div className="block md:hidden">
        <select
          className="select border-none bg-primary/10 focus:outline-none rounded-2xl w-full max-w-xs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.selectedIndex)}
        >
          {categories?.map((cat, index) => (
            <option
              key={cat._id}
              value={index}
              className="bg-blackish outline-none"
            >
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <JobContainer jobs={jobs} />
    </section>
  );
};

export default TabContainer;
