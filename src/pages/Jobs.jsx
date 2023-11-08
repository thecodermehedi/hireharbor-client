import {useState} from "react";
import JobsBanner from "../components/ui/JobsBanner";
import JobsTable from "../components/ui/JobsTable";
import { Helmet } from "react-helmet-async";

const Jobs = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const handleJobSearch = (e) => {
    e.preventDefault();
    setSearchFieldValue(e.target.search.value);
  };
  return (
    <section className="container mx-auto">
      <Helmet>
        <title>Jobs - HireHarbor</title>
        <meta
          name="description"
          content="Explore jobs and apply for them."
        />
      </Helmet>
      <JobsBanner handleJobSearch={handleJobSearch} />
      <JobsTable searchFieldValue={searchFieldValue} />
    </section>
  );
};

export default Jobs;
