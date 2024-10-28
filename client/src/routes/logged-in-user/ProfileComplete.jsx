import SectionCompleted from "./SectionCompleted";
import Button from "../../components/ui-components/Button";
import { Link, useLocation } from "react-router-dom";
import { FiCircle, FiCheckCircle } from "react-icons/fi";

export default function ProfileComplete() {
  const location = useLocation();
  const isProfile = location.pathname === "/profile";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-fit items-center justify-between gap-3">
        <SectionCompleted />
        <SectionCompleted />
        <SectionCompleted />
        <SectionCompleted />
        <SectionCompleted />
        <SectionCompleted />
      </div>
      <div>
        <p className="text-rddrkPink font-bold">5/6 complete</p>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">CV upload</p>
          <FiCircle className="text-xl text-green-700" />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-bold">About you</p>
          <FiCheckCircle className="text-xl text-green-700" />
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
