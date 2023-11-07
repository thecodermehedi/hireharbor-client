import BannerComponent from "../components/ui/BannerComponent";
import DatePicker from "react-datepicker";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
const UpdateJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section>
      <BannerComponent
        title="Revise Your Job Posting"
        subTitle="Update details to attract the right candidates"
      />
      <div className="min-h-fit bg-black">
        <div className="flex flex-col w-full max-w-7xl mx-auto py-10">
          <form
            // onSubmit={handleAddJob}
            className="px-10 lg:px-28  pt-10 my-8 mx-5 md:mx-0"
          >
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block  text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  className="w-full   rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="companyName"
                  type="text"
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="yourName"
                >
                  Your Name
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="yourName"
                  type="text"
                  defaultValue={"default"}
                  readOnly
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="jobTitle"
                >
                  Job Title
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="jobTitle"
                  type="text"
                  placeholder="Enter Job Title"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="yourEmail"
                >
                  Your Email
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="yourEmail"
                  type="text"
                  defaultValue={"default"}
                  readOnly
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="category"
                >
                  Job Category
                </label>
                <select
                  className="select w-full   rounded-2xl  py-3 px-4 bg-neutral  focus:outline-none border-none"
                  id="category"
                  required
                  defaultValue={"default"}
                >
                  <option disabled value={"default"}>
                    Select Category
                  </option>
                </select>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="salaryRange"
                >
                  Salary Range
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none  placeholder:"
                  id="salaryRange"
                  type="text"
                  placeholder="Enter Salary Range"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="applicants"
                >
                  Total Applicants
                </label>
                <input
                  className="w-full     rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="applicants"
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="experience"
                >
                  Experience Level
                </label>
                <input
                  className="    rounded-2xl placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="experience"
                  type="text"
                  placeholder="Enter Experience Level"
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block    text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="deadline"
                >
                  Enter Deadline
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full  rounded-2xl   py-3 px-4 bg-neutral  focus:outline-none cursor-pointer"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="logoURL"
                >
                  Company Logo
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="logoURL"
                  type="url"
                  placeholder="Enter Company Logo URL"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="bannerURL"
                >
                  Job Banner
                </label>
                <input
                  className=" w-full    rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none "
                  id="bannerURL"
                  type="url"
                  placeholder="Enter Job Banner URL"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" block   text-xl text-opacity-80  font-semibold mb-2"
                  htmlFor="desc"
                >
                  Job Description
                </label>
                <textarea
                  className="w-full h-96   rounded-2xl   placeholder:text-whitish/50 focus:placeholder:text-opacity-0 py-3 px-4 bg-neutral  focus:outline-none resize-none overflow-hidden"
                  id="desc"
                  type="url"
                  placeholder="Enter Job Description"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <button
                  className="btn bg-primary/50 rounded-2xl border-none transition-all duration-300 cursor-pointer  
                  hover: capitalize text-xl hover:bg-primary/70 w-full"
                >
                  Publish Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateJob;
