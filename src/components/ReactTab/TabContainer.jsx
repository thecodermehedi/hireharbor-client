import {useQuery} from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Tab from "./Tab";
import {useState} from "react";
import JobContainer from "../ui/JobContainer";

const TabContainer = () => {
  const axios = useAxios();
  const [activeTab, setActiveTab] = useState(0);
  const getJobCategories = async () => {
    const res = await axios.get("/categories");
    return res.data;
  };
  const {
    data: categories,
    isLoading: isCatLoading,
    isError: isCatError,
    error: catError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getJobCategories,
  });

  const activeCategoryValue = categories?.[activeTab]?.value;
  // console.log("currenCatValue", activeCategoryValue);
  // console.log(categories);
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
  // console.log(jobs);
  return (
    <section>
      <div className="lg:w-fit bg-neutral p-2 rounded-2xl hidden md:flex gap-4">
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
          className="select border-none bg-primary/10 focus:outline-none border-2 rounded-2xl w-full max-w-xs"
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
