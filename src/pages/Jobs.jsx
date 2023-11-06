import {useState} from "react";
import JobsBanner from "../components/ui/JobsBanner";
import JobsTable from "../components/ui/JobsTable";

const Jobs = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const handleJobSearch = (e) => {
    e.preventDefault();
    setSearchFieldValue(e.target.search.value);
  };
  return (
    <section className="container mx-auto">
      <JobsBanner handleJobSearch={handleJobSearch} />
      <JobsTable searchFieldValue={searchFieldValue} />
    </section>
  );
};

export default Jobs;
