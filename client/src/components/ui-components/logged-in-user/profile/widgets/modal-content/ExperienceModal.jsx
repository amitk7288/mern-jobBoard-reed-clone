import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../../../../../features/authSlice";
import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
import { updateProfile } from "../../../../../../features/authSlice";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceModal({ closeModal }) {
  const dispatch = useDispatch();
  const [updateExperience] = useUpdateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);

  const [expRole, setExpRole] = useState("");
  const [company, setCompany] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");

  const handleAddExperience =  async (e) => {
    e.preventDefault();

    try {
      const newExperience = {
        expRole,
        company,
        yearStart,
        yearEnd,
        uuid: uuidv4(),
      };

    const { experience } = profileInfo.profile;
    const updatedExperience = [...experience, newExperience];
    
    await updateExperience({ experience: updatedExperience }).unwrap();

      dispatch(addExperience(newExperience));
      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...userInfo.profile,
            experience: updatedExperience,
          },
        }),
      );
      console.log("Profile updated");
      closeModal();
    } catch (error) {
      console.log(error);   
    }
  };

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Add Work Experience</h2>
      <form className="flex flex-col gap-3" onSubmit={handleAddExperience}>
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="label-style">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="e.g. Software Developer"
            value={expRole}
            onChange={(e) => setExpRole(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="company" className="label-style">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="e.g. Facebook"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="year-start" className="label-style">
              Year start
            </label>
            <input
              type="number"
              id="year-start"
              name="year-start"
              placeholder="e.g. 2022"
              value={yearStart}
              onChange={(e) => setYearStart(e.target.value)}
              className="input-style"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year-end" className="label-style">
              Year end
            </label>
            <input
              type="number"
              id="year-end"
              name="year-end"
              placeholder="e.g. 2024"
              value={yearEnd}
              onChange={(e) => setYearEnd(e.target.value)}
              className="input-style"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
        >
          Add
        </button>
      </form>
    </div>
  );
}
