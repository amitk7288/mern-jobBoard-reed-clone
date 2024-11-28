import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfileMutation } from "../features/usersApiSlice";
import { toggleSave, applyToJob, updateProfile } from "../features/authSlice";
import { toast } from "react-toastify";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoChevronUp,
  IoChevronDownOutline,
  IoClose,
} from "react-icons/io5";
import { HiMiniBolt } from "react-icons/hi2";
import {
  RiMoneyPoundCircleLine,
  RiTimeLine,
  RiMapPin2Line,
} from "react-icons/ri";
import confetti from "canvas-confetti";

export default function JobCard({title, date, employer, max, min, loc, jobId, job}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state?.auth?.userInfo);
  const profileInfo = useSelector((state) => state?.auth?.profileInfo);
  const savedJobsData = useSelector(
    (state) => state?.auth?.profileInfo?.profile?.savedJobs,
  );
  const appliedJobsData = useSelector(
    (state) => state?.auth?.profileInfo?.profile?.appliedJobs,
  );
  const jobSaved = useSelector((state) =>
    state?.auth?.profileInfo?.profile?.savedJobs.some(
      (job) => job.jobId === parseInt(jobId),
    ),
  );
  const jobApplied = useSelector((state) =>
    state?.auth?.profileInfo?.profile?.appliedJobs.some(
      (job) => job.jobId === parseInt(jobId),
    ),
  );
  const [updateSavedJobs] = useUpdateProfileMutation();
  const [updateAppliedJobs] = useUpdateProfileMutation();

  useEffect(() => {
    console.log("SAVED JOBS: ", savedJobsData);
  }, [savedJobsData]);
  useEffect(() => {
    console.log("APPLIED JOBS: ", appliedJobsData);
  }, [appliedJobsData]);

  const handleSaveClick = async (job) => {
    console.log("job: ", job);
    console.log("job saved?: ", jobSaved);

    if (!profileInfo) {
      navigate("/login", {
        state: { from: window.location.pathname },
      });
      return;
    }

    try {
      dispatch(toggleSave(job));

      const updatedSavedJobs = jobSaved
        ? savedJobsData.filter((savedJob) => savedJob.jobId !== job.jobId)
        : [...savedJobsData, job];

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

  const handleApplyClick = async (job) => {
    console.log("job: ", job);
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
      dispatch(applyToJob(job));
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      const updatedAppliedJobs = [...appliedJobsData, job];

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
    <div
      className={`${jobSaved && !jobApplied && `border-rdpink`} ${jobApplied && `border-green-600 bg-green-50`} flex flex-col gap-2.5 rounded-md border border-[#c8c8c8] bg-white px-3 py-2.5 text-[#0f151a] md:w-[100%]`}
    >
      <div id="header" className="flex items-center justify-between">
        <div className="text-sm font-bold">
          <div className="flex items-center gap-1">
            <HiMiniBolt className="text-[#FF00CD]" />
            <p className="text-[#4d5054] s:text-base">Easy Apply</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl">
          <div onClick={() => handleSaveClick(job)} className="cursor-pointer">
            {jobSaved ? (
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Saved!</p>
                <IoHeartSharp className={jobSaved && `text-rdpink`} />
              </div>
            ) : (
              <IoHeartOutline />
            )}
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div id="body" className="flex flex-col gap-2.5">
          <div>
            <Link
              to={`/jobs/${jobId}`}
              className="jobtitle text-lg font-bold text-[#1e1ef0] md:text-2xl"
            >
              {title}
            </Link>
            <div className="flex items-center gap-1">
              <p className="date text-sm font-normal">Posted {date}</p>
              <p className="font-medium text-[#1e1ef0]">{employer}</p>
            </div>
          </div>
          <div className="meta grid grid-cols-2 gap-2 text-sm md:text-base">
            <div className="salary flex items-center gap-2">
              <RiMoneyPoundCircleLine className="text-base font-medium" />{" "}
              <p>{min && max ? `£${min} - £${max}` : `Competitive Salary`}</p>
            </div>
            <div className="time flex items-center gap-2">
              <RiTimeLine className="text-base font-medium" />
              <p>Permanent, full</p>
            </div>
            <div className="location flex items-center gap-2">
              <RiMapPin2Line className="text-base font-medium" />
              <p>{loc}</p>
            </div>
          </div>
        </div>
        <div id="footer" className="flex justify-end md:flex-col md:gap-4">
          <div
            onClick={() => handleApplyClick(job)}
            className="mt-4 block w-full max-w-[300px] cursor-pointer rounded-[4px] border-2 border-[#081351] bg-white px-3 py-1.5 text-center font-medium text-[#081351]"
          >
            {jobApplied ? `Applied!` : `Easy Apply`}
          </div>
        </div>
      </div>
    </div>
  );
}
