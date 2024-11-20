import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLooking, setAbout, setCV, setStatus, setExp, setQual } from "../../../features/profileSlice";
import SectionCompleted from "./SectionCompleted";
import Button from "../../ui-components/Button";
import { Link, useLocation } from "react-router-dom";
import { IoEllipseOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FaRegSmileWink } from "react-icons/fa";

export default function ProfileComplete() {
  const dispatch = useDispatch();
  const loc = useLocation();
  const isProfile = loc.pathname === "/profile";

  const { profileInfo } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.auth);

  const { about, looking, status, exp, qual } = useSelector(
    (state) => state.profile,
  );
  const { role, tel } = profileInfo?.profile?.about || {};
  const { desiredJobTitle, salary, location, jobType } =
    profileInfo?.profile?.lookingFor || {};
  const { cv } = profileInfo?.profile || {};
  const { employmentStatus, noticePeriod } = profileInfo?.profile?.status || {};
  const { qualifications } = profileInfo?.profile || {};
  const { experience } = profileInfo?.profile || {};

  console.log(profileInfo);

  useEffect(() => {
    if (userInfo.name && role && tel && userInfo.email) {
      dispatch(setAbout(true));
      console.log("about true");
    } else {
      dispatch(setAbout(false));
      console.log("about false");
    }

    if (cv) {
      dispatch(setCV(true));
      console.log("cv true");
    } else {
      dispatch(setCV(false));
      console.log("cv false");
    }

    if (desiredJobTitle && salary && location && jobType) {
      dispatch(setLooking(true));
      console.log("looking true");
    } else {
      dispatch(setLooking(false));
      console.log("looking false");
    }

    if (employmentStatus && noticePeriod) {
      dispatch(setStatus(true));
      console.log("status true");
    } else {
      dispatch(setStatus(false));
      console.log("status false");
    }

    if (experience.length > 0) {
      dispatch(setExp(true));
      console.log("exp true");
    } else {
      dispatch(setExp(false));
      console.log("exp false");
    }

    if (qualifications.length > 0) {
      dispatch(setQual(true));
      console.log("qual true");
    } else {
      dispatch(setQual(false));
      console.log("qual false");
    }
  }, []);

  const completedSections = [about, cv, looking, status, exp, qual];

  // Count the number of completed sections
  const completedCount = completedSections.filter(Boolean).length;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-fit items-center justify-between gap-3">
        {completedSections.map((_, index) => (
          <SectionCompleted highlight={index < completedCount} key={index} />
        ))}
      </div>
      <div>
        <p className="font-bold text-rddrkPink">
          {completedSections.filter(Boolean).length}/6 complete
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">About you</p>
          {about ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">CV Upload</p>
          {cv ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">Looking for</p>
          {looking ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">Status and availability</p>
          {status ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">Work experience</p>
          {exp ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">Qualifications</p>
          {qual ? (
            <IoCheckmarkCircle className="text-xl text-rdpink" />
          ) : (
            <IoEllipseOutline className="text-xl text-gray-400" />
          )}
        </li>
      </ul>
      {!isProfile && (
        <Button>
          <Link to={`/profile`}>Update my profile</Link>
        </Button>
      )}
    </div>
  );
}
