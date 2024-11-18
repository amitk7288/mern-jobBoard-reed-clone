import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQualification } from "../../../../../../features/authSlice";
import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
import { updateProfile } from "../../../../../../features/authSlice";
import { v4 as uuidv4 } from "uuid";

export default function QualificationsModal({ closeModal }) {
  const dispatch = useDispatch();
  const [updateQualifications] = useUpdateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

  const handleAddQualification = async (e) => {  
    e.preventDefault();

    try {
      const newQualification = {
        name,
        school,
        yearStart,
        yearEnd,
        subject,
        grade,
        uuid: uuidv4(),
      };

      const { qualifications } = profileInfo.profile;
      const updatedQualification = [...qualifications, newQualification];

      await updateQualifications({ qualifications: updatedQualification }).unwrap();

      dispatch(addQualification(newQualification));

      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...userInfo.profile,
            qualifications: updatedQualification,
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
      <h2 className="mb-3 text-xl font-bold">Add Qualification</h2>
      <form className="flex flex-col gap-3" onSubmit={handleAddQualification}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="label-style">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. BA Hons Degree"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="school" className="label-style">
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="e.g. University of Birmingham"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="subject" className="label-style">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="e.g. Computer Science"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="input-style"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="grade" className="label-style">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="2:1"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="input-style"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="year-start" className="label-style">
              Year start
            </label>
            <input
              type="text"
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
              type="text"
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
