import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExperience } from "../../../../../features/authSlice";
import { setExp } from "../../../../../features/profileSlice";
import { useUpdateProfileMutation } from "../../../../../features/usersApiSlice";
import InfoPod from "../../../../ui-components/InfoPod";
import ExperienceText from "../../../../ui-components/ExperienceText";
import ExperienceModal from "../widgets/modal-content/ExperienceModal";
import { LuPlusCircle } from "react-icons/lu";

export default function Experience() {
  const dispatch = useDispatch();
  const [updateExperience] = useUpdateProfileMutation();
  const { profileInfo } = useSelector((state) => state.auth);
  const { experience } = profileInfo?.profile || {};

  useEffect(() => {
    if (experience.length > 0) {
      dispatch(setExp(true));
    } else {
      dispatch(setExp(false));
    }    
  }, [experience])

  const handleRemove = async (id) => {
    try {
      dispatch(removeExperience(id));

      const updatedExperience = profileInfo.profile.experience.filter(
        (exp) => exp.uuid !== id,
      );

      await updateExperience({
        experience: updatedExperience,
      }).unwrap();

      console.log("Experience removed and profile updated successfully");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <InfoPod
      title={`Work Experience`}
      headerLink={`Add work experience`}
      headerIcon={<LuPlusCircle />}
      modalContent={<ExperienceModal />}
    >
      <ul className="flex flex-col gap-4">
        {experience.map((exp) => (
          <ExperienceText
            key={exp.uuid}
            expRole={exp.expRole}
            company={exp.company}
            from={exp.yearStart}
            to={exp.yearEnd}
            onRemove={() => handleRemove(exp.uuid)}
          />
        ))}
      </ul>
    </InfoPod>
  );
}