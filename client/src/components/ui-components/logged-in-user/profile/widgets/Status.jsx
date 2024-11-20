import { useSelector } from "react-redux";
import InfoPod from "../../../../ui-components/InfoPod";
import InfoText from "../../../../ui-components/InfoText";
import StatusModal from "../widgets/modal-content/StatusModal";
import { LuPenSquare } from "react-icons/lu";

export default function Status() {
  const { profileInfo } = useSelector((state) => state.auth);
  const { employmentStatus, noticePeriod, workEligibility } = profileInfo?.profile?.status || {};


  return (
    <InfoPod
      title={`Status and availability`}
      headerLink={`Edit`}
      headerIcon={<LuPenSquare />}
      modalContent={
        <StatusModal
          employmentStatus={employmentStatus}
          noticePeriod={noticePeriod}
          workEligibility={workEligibility}
        />
      }
    >
      <ul className="flex flex-col gap-3">
        <InfoText title={`Employment status`} body={employmentStatus} />
        <InfoText title={`Notice period`} body={noticePeriod} />
        <InfoText
          title={`Work eligibility`}
          body={`${workEligibility ? `Eligible to work in the UK` : `Not eligible to work in the UK`}`}
        />
      </ul>
    </InfoPod>
  );
}
