import InfoPod from "../../../../components/ui-components/InfoPod";
import ExperienceText from "../../../../components/ui-components/ExperienceText";
import { LuPlusCircle } from "react-icons/lu";

export default function Experience() {
  return (
    <InfoPod
      title={`Work Experience`}
      headerLink={`Add work experience`}
      headerIcon={<LuPlusCircle />}
    >
      <ul className="border-3 flex flex-col gap-4 border-red-500">
        <ExperienceText role={'Senior Developer'} company={`Apple`} from={2016} to={2018} />
      </ul>
    </InfoPod>
  );
}
