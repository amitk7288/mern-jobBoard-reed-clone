import InfoPod from "../../../../components/ui-components/InfoPod";
import InfoText from "../../../../components/ui-components/InfoText";
import { LuPenSquare } from "react-icons/lu";

export default function Status() {
  return (
    <InfoPod
      title={`Status and availability`}
      headerLink={`Edit`}
      headerIcon={<LuPenSquare />}
    >
      <ul className="flex flex-col gap-3">
        <InfoText title={`Employment status`} body={`Employed (full-time)`} />
        <InfoText title={`Notice period`} body={`2 weeks`} />
        <InfoText
          title={`Work eligibility`}
          body={`Eligible to work in the UK`}
        />
      </ul>
    </InfoPod>
  );
}