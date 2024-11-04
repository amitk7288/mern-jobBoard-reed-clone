import InfoPod from "../../../../ui-components/InfoPod";
import ExperienceText from "../../../../ui-components/ExperienceText";
import ExperienceModal from "../widgets/modal-content/ExperienceModal";
import { LuPlusCircle } from "react-icons/lu";

export default function Experience() {
  return (
    <InfoPod
      title={`Work Experience`}
      headerLink={`Add work experience`}
      headerIcon={<LuPlusCircle />}
      modalContent={<ExperienceModal />}
    >
      <ul id="exp123" className="flex flex-col gap-4">
        <ExperienceText
          role={"Senior Developer"}
          company={`Apple`}
          from={2016}
          to={2018}
        />
      </ul>
    </InfoPod>
  );
}
