import {useRef, useState} from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import {useQueryClient, useMutation} from "@tanstack/react-query";
import emailjs from "@emailjs/browser";

const ApplyModal = ({job}) => {
  const {
    _id,
    company,
    title,
    postermail,
    category,
    location,
    deadline,
    experienceLevel,
    salary,
  } = job;
  const {user} = useAuth();
  const modalRef = useRef(null);
  const applicationForm = useRef(null);
  const [resumeLink, setResumeLink] = useState("");
  const axios = useAxios();
  const queryClient = useQueryClient();
  const addApplicant = async (application) => {
    const res = await axios.post("/applications", application);
    return res.data;
  };

  const {mutateAsync: addApplicantFn} = useMutation({
    mutationFn: addApplicant,
  });

  const updateJob = async (id) => {
    const res = await axios.patch(`/job/${id}`);
    return res.data;
  };

  const {mutateAsync: updateJobFn} = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["job", _id]});
    },
  });

  const sendEmail = (form) => {
    const result = emailjs.sendForm(
      "service_hireharbor",
      "template_hireharbor",
      form.current,
      "waOMcBKc8rgIPCuBC"
    );
    return result;
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (postermail === user?.email) {
      toast.error("You can't apply to your own job post");
      return;
    }
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);

    if (currentDate > deadlineDate) {
      toast.error("The deadline has passed");
      return;
    }

    const application = {
      name: user?.displayName,
      email: user?.email,
      resumeLink,
      company,
      title,
      category,
      location,
      deadline,
      experienceLevel,
      salary,
    };

    const toastId = toast.loading("Sending application...");

    try {
      await addApplicantFn(application);
    } catch (error) {
      toast.error(`Failed to add applicant: ${error.message}`, {id: toastId});
      return;
    }

    try {
      await updateJobFn(_id);
      toast.success("Application submitted successfully", {id: toastId});
      closeModal();
    } catch (error) {
      toast.error(`Failed to update job: ${error.message}`, {id: toastId});
    }

    sendEmail(applicationForm).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  return (
    <div>
      <div className="flex my-5 justify-center items-center">
        <button
          onClick={openModal}
          className="text-blackish font-semibold py-2 px-5 rounded-2xl bg-primary hover:bg-opacity-80 transition"
        >
          Apply Now
        </button>
      </div>
      <dialog
        id="applyModal"
        className="modal modal-bottom sm:modal-middle bg-blackish bg-opacity-20"
        ref={modalRef}
      >
        <div className="modal-box bg-blackish text-center">
          <h3 className="font-bold text-xl"> Job Application Form </h3>
          <p className="py-4 text-sm md:text-lg">
            Press fill in the form below to apply for this job.
          </p>
          <div className="modal-action">
            <form
              onSubmit={handleApply}
              className="flex flex-col gap-2 w-full"
              ref={applicationForm}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="input bg-neutral focus:outline-none  rounded-2xl border-none mb-2 text-lg w-full pr-10  text-whitish  outline-none"
                readOnly
                defaultValue={user?.displayName}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="input bg-neutral focus:outline-none  rounded-2xl border-none mb-2 text-lg w-full pr-10  text-whitish  outline-none"
                readOnly
                defaultValue={user?.email}
              />
              <input
                type="url"
                name="resumeLink"
                id="resumeLink"
                placeholder="Enter resume link here"
                className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
                onChange={(e) => setResumeLink(e.target.value)}
                required
              />
              <button
                type="submit"
                className=" text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl normal-case"
              >
                Send Application
              </button>
              <button
                type="button"
                onClick={closeModal}
                className=" text-blackish font-semibold py-2 rounded-2xl bg-red-500 hover:bg-opacity-80 transition text-base md:text-xl normal-case"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

ApplyModal.propTypes = {
  job: PropTypes.object.isRequired,
};

export default ApplyModal;
