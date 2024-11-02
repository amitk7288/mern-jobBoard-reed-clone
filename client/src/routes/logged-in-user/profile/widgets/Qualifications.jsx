import InfoPod from "../../../../components/ui-components/InfoPod";
import QualificationText from "../../../../components/ui-components/QualificationsText";
import { LuPlusCircle } from "react-icons/lu";

export default function Experience() {
  return (
    <InfoPod
      title={`Qualifications`}
      headerLink={`Add qualification`}
      headerIcon={<LuPlusCircle />}
    >
      <ul className="border-3 flex flex-col gap-4 border-red-500">
        <QualificationText type={`University desgree`} school={`Birmingham City University`} from={2008} to={2011} subject={`Business and Management`} grade={`2:2`} />
        <QualificationText type={`University desgree`} school={`Birmingham City University`} from={2008} to={2011} subject={`Business and Management`} grade={`2:2`} />
        <QualificationText type={`University desgree`} school={`Birmingham City University`} from={2008} to={2011} subject={`Business and Management`} grade={`2:2`} />
      </ul>
    </InfoPod>
  );
}
