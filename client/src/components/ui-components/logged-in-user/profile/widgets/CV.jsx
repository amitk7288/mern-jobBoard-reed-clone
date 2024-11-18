import { useSelector } from "react-redux";
import InfoPod from "../../../../ui-components/InfoPod";
import CVModal from "../widgets/modal-content/CVModal";
import { LuPlusCircle } from "react-icons/lu";

export default function CV() {
  const { profileInfo } = useSelector((state) => state.auth);
  const { cv } = profileInfo?.profile || {};
  const cvValue = cv;

  console.log(profileInfo);
  
  
  return (
    <InfoPod
      title={`CV`}
      headerLink={`Add`}
      headerIcon={<LuPlusCircle />}
      modalContent={<CVModal cvValue={cvValue} />}
    >
      <div>
        <p>{cvValue ? `CV Added - ${cvValue}` : `No CV added`}</p>
      </div>
    </InfoPod>
  );
}
