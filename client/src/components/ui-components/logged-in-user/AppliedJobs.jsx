import { useSelector } from "react-redux";
import CardSideScroll from "../CardSideScroll"
import JobCard from "../../JobCard";

export default function AppliedJobs() {
  const appliedJobs = useSelector((state) => state.auth.profileInfo.profile.appliedJobs);

  const formatDate = (jobDate) => {
    if (jobDate) {
      const [day, month, year] = jobDate?.split("/");
      const date = new Date(`${year}-${month}-${day}`);
      const formattedDate = `${parseInt(day)} ${date.toLocaleDateString("en-GB", { month: "short" })}`;
      return formattedDate;
    } else {
      console.log("no job date");
    }
  };
  return (
    <CardSideScroll>
      {appliedJobs &&
        appliedJobs?.map((job) => (
          <JobCard
            key={job.jobId}
            job={job}
            jobId={job.jobId}
            title={job.jobTitle}
            date={job.date ? formatDate(job?.date) : ""}
            employer={job.employerName}
            max={job.maximumSalary}
            min={job.minimumSalary}
            loc={job.locationName}
          />
        ))}
    </CardSideScroll>
  );
}