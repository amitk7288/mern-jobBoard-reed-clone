import InfoPod from "../../../../ui-components/InfoPod";
import InfoText from "../../../../ui-components/InfoText";
import LookingForModal from "./modal-content/LookingFor"
import { LuPenSquare } from "react-icons/lu";

export default function LookingFor() {
  return (
    <InfoPod
      title={`Looking for`}
      headerLink={`Edit`}
      headerIcon={<LuPenSquare />}
      modalContent={<LookingForModal />}
    >
      <ul className="flex flex-col gap-3">
        <InfoText title={`Desired job title`} body={`React`} />
        <InfoText title={`Salary`} body={`£40,000 per annum`} />
        <InfoText title={`Location`} body={`West Midlands`} />
        <InfoText
          title={`Job type`}
          body={`Permanent, Contract, Full-time, Part-time`}
        />
      </ul>
    </InfoPod>
  );
}
