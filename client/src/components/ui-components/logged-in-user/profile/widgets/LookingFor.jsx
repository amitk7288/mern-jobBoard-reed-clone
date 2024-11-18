import InfoPod from "../../../../ui-components/InfoPod";
import InfoText from "../../../../ui-components/InfoText";
import LookingForModal from "./modal-content/LookingForModal"
import { useSelector } from "react-redux";
import { LuPenSquare } from "react-icons/lu";

export default function LookingFor() {
  const { profileInfo } = useSelector((state) => state.auth);
  const { desiredJobTitle, salary, location } = profileInfo?.profile?.lookingFor || {};

  return (
    <InfoPod
      title={`Looking for`}
      headerLink={`Edit`}
      headerIcon={<LuPenSquare />}
      modalContent={<LookingForModal />}
    >
      <ul className="flex flex-col gap-3">
        <InfoText title={`Desired job title`} body={desiredJobTitle} />
        <InfoText title={`Salary`} body={`${salary} per annum`} />
        <InfoText title={`Location`} body={location} />
        <InfoText
          title={`Job type`}
          body={`Permanent, Contract, Full-time, Part-time`}
        />
      </ul>
    </InfoPod>
  );
}
