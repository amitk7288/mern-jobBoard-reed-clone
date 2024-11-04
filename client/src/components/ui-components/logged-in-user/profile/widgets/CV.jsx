import InfoPod from "../../../../ui-components/InfoPod";
import CVModal from "../widgets/modal-content/CVModal";
import { LuPlusCircle } from "react-icons/lu";

export default function CV() {
  return (
    <InfoPod
      title={`CV`}
      headerLink={`Add`}
      headerIcon={<LuPlusCircle />}
      modalContent={<CVModal />}
    >
      <div>
        <p>No CV added</p>
      </div>
    </InfoPod>
  );
}
