import { useSelector, useDispatch } from "react-redux";
import { removeQualification } from "../../../../../features/authSlice";
import { useUpdateProfileMutation } from "../../../../../features/usersApiSlice";
import InfoPod from "../../../../ui-components/InfoPod";
import QualificationText from "../../../../ui-components/QualificationsText";
import QualificationsModal from "../widgets/modal-content/QualificationsModal";
import { LuPlusCircle } from "react-icons/lu";

export default function Qualifications() {
  const dispatch = useDispatch();
  const [updateQualification] = useUpdateProfileMutation();
  const { profileInfo } = useSelector((state) => state.auth);
  const { qualifications } = profileInfo?.profile || {};

  console.log(qualifications);

  const handleRemove = async (id) => {
    try {
      dispatch(removeQualification(id));

      const updatedQualification = profileInfo.profile.qualifications.filter(
        (q) => q.uuid !== id,
      );

      await updateQualification({
        qualifications: updatedQualification,
      }).unwrap();

      console.log("Qualification removed and profile updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InfoPod
      title={`Qualifications`}
      headerLink={`Add qualification`}
      headerIcon={<LuPlusCircle />}
      modalContent={<QualificationsModal />}
    >
      <ul className="border-3 flex flex-col gap-4 border-red-500">
        {qualifications.map((q) => (
          <QualificationText
            key={q.uuid}
            name={q.name}
            school={q.school}
            yearStart={q.yearStart}
            yearEnd={q.yearEnd}
            subject={q.subject}
            grade={q.grade}
            onRemove={() => handleRemove(q.uuid)}
          />
        ))}
      </ul>
    </InfoPod>
  );
}
