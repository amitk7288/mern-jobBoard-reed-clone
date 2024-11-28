import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchJobById } from "../features/jobsSlice";
import { toggleSave, applyToJob, updateProfile } from "../features/authSlice";
import { useUpdateProfileMutation } from "../features/usersApiSlice";
import JobSearch from "./JobSearch";
import ModalDropDown from "../components/ui-components/ModalDropDown";
import MobileJobSearch from "./MobileJobSearch";
import {
  RiMoneyPoundCircleLine,
  RiTimeLine,
  RiMapPin2Line,
} from "react-icons/ri";
import {
  HiArrowLeftCircle,
} from "react-icons/hi2";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import DOMPurify from "dompurify";
import confetti from "canvas-confetti";

export default function JobPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state?.auth?.userInfo);
  const profileInfo = useSelector((state) => state?.auth?.profileInfo);
  const jobDetails = useSelector((state) => state?.jobs?.jobDetails);
  const searchData = useSelector((state) => state?.jobs?.searchData)
  const { jobId } = useParams();
  const savedJobsData = useSelector(
    (state) => state.auth?.profileInfo?.profile?.savedJobs,
  );
  const jobSaved = useSelector((state) =>
    state?.auth?.profileInfo?.profile?.savedJobs.some(
      (job) => job.jobId === parseInt(jobId)
    ),
  );
  const [updateSavedJobs] = useUpdateProfileMutation();
  const appliedJobsData = useSelector(
    (state) => state?.auth?.profileInfo?.profile?.appliedJobs,
  );
  const jobApplied = useSelector((state) =>
    state?.auth?.profileInfo?.profile?.appliedJobs.some(
      (job) => job.jobId === parseInt(jobId),
    ),
  );
  const [updateAppliedJobs] = useUpdateProfileMutation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("job saved?: ", jobSaved);
    if (jobId) {
      dispatch(fetchJobById(jobId));
    } else {
      console.log('not dispatched');
    }
  }, [dispatch, jobId]);

  useEffect(() => {
    console.log(jobDetails);
  }, [jobDetails]);


  const {
    locationName = "",
    maximumSalary = "",
    minimumSalary = "",
    contractType = "",
    employerName = "",
    jobTitle = "",
    jobDescription = "",
  } = jobDetails || {};


  const sanitizedDescription = DOMPurify.sanitize(jobDescription);

  const formatDate = (jobDate) => { 
    if (jobDate) {
      const [day, month, year] = jobDate?.split("/");
      const date = new Date(`${year}-${month}-${day}`);
      const formattedDate = `${parseInt(day)} ${date.toLocaleDateString("en-GB", { month: "short" })}`;
      return formattedDate;
    } else {
      console.log('no job date');
    }
  }

  const handleSaveClick = async (jobDetails) => {
    if (!profileInfo) {
      navigate("/login", {
        state: { from: window.location.pathname },
      });
      return;
    }
    try {
      dispatch(toggleSave(jobDetails));

      const updatedSavedJobs = jobSaved
        ? savedJobsData.filter(
            (savedJob) => savedJob.jobId !== jobDetails.jobId,
          )
        : [...savedJobsData, jobDetails];

      const updateData = {
        savedJobs: updatedSavedJobs,
      };

      await updateSavedJobs(updateData).unwrap();

      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...userInfo.profile,
            savedJobs: updatedSavedJobs,
          },
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplyClick = async (jobDetails) => {
    console.log("job: ", jobDetails);
    console.log("job applied?: ", jobApplied);

    if (!profileInfo) {
      navigate("/login", {
        state: { from: window.location.pathname },
      });
      return;
    }

    if (jobApplied) {
      console.log("Job already applied, no action taken.");
      return;
    }

    try {
      dispatch(applyToJob(jobDetails));
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      const updatedAppliedJobs = [...appliedJobsData, jobDetails];

      const updateData = {
        appliedJobs: updatedAppliedJobs,
      };

      await updateAppliedJobs(updateData).unwrap();

      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...userInfo.profile,
            appliedJobs: updatedAppliedJobs,
          },
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <JobSearch
        keywords={searchData?.whatVal}
        location={searchData.whereVal}
      />
      <div>
        <div className="border-b bg-white p-[15px] lg:hidden">
          <div
            className="flex items-center gap-3 border border-rdblack px-3 py-1.5"
            onClick={() => setIsOpen(true)}
          >
            <p>{searchData?.whatVal} jobs</p>
          </div>
        </div>
        <div className="border-t bg-[#f8f8f8] px-3 pb-10 pt-5 2xl:px-[50px]">
          <div className="mx-auto block max-w-[1280px] py-[20px]">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xl"
            >
              <HiArrowLeftCircle />
              <p className="text-xl">Back</p>
            </button>
          </div>
          <div className="mx-auto max-w-[1280px] md:flex md:gap-6">
            <div className="basis-[100%]">
              <div id="main" className="flex flex-col gap-3">
                <div className="flex flex-col gap-6 rounded-lg border border-[#c8c8c8] bg-white p-4 text-[#0f151a] md:w-[100%] md:px-[50px] md:py-[40px]">
                  {/* job info */}
                  <div className="flex flex-col gap-16 lg:items-center lg:gap-8 lg:bg-[#f8f8f8] lg:py-7">
                    <div className="flex flex-col gap-1 text-sm md:text-base lg:text-center">
                      <p className="text-xl font-bold text-rdblack md:text-4xl">
                        {jobTitle}
                      </p>
                      <div className="flex items-center gap-2">
                        <p>
                          Posted{" "}
                          {jobDetails?.datePosted
                            ? formatDate(jobDetails?.datePosted)
                            : ""}
                        </p>
                        <span className="font-medium text-rdlightBlue underline">
                          {employerName}
                        </span>
                      </div>
                      <p className="font-bold text-[#4d5054]">Easy Apply</p>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row lg:items-center">
                      <div className="meta grid basis-[75%] grid-cols-1 gap-1 rounded-md bg-[#f8f8f8] p-4 md:grid-cols-3">
                        <div className="salary flex items-center justify-center gap-2">
                          <RiMoneyPoundCircleLine className="text-xl" />{" "}
                          <p>
                            {minimumSalary && maximumSalary
                              ? `£${minimumSalary} - £${maximumSalary}`
                              : "Competitive salary"}
                          </p>
                        </div>
                        <div className="time flex items-center justify-center gap-2">
                          <RiTimeLine className="text-xl" />
                          <p>{contractType}</p>
                        </div>
                        <div className="location flex items-center justify-center gap-2">
                          <RiMapPin2Line className="text-xl" />
                          <p>{locationName}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-3">
                        <button
                          onClick={() => handleApplyClick(jobDetails)}
                          className="mx-auto block w-[260px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885]"
                        >
                          {jobApplied ? `Applied!` : `Apply now`}
                        </button>
                        <button
                          onClick={() => handleSaveClick(jobDetails)}
                          className="mx-auto flex w-[260px] items-center justify-center gap-1 rounded-md border-2 border-rdblack bg-[#ffffff] px-3 py-2 font-medium text-rdblack hover:bg-rdblack hover:text-white"
                        >
                          {jobSaved ? (
                            <>
                              <IoHeartSharp
                                className={jobSaved && `text-rdpink`}
                              />
                              <p>Saved!</p>
                            </>
                          ) : (
                            <>
                              <IoHeartOutline className="text-lg" />
                              <p>Save job</p>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* job details */}
                  <div className="flex flex-col gap-6">
                    <div
                      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <ModalDropDown closeModal={() => setIsOpen(false)}>
          <MobileJobSearch />
        </ModalDropDown>
      ) : null}
    </>
  );
}
