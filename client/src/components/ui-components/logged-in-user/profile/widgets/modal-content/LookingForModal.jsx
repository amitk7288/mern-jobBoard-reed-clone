import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLooking } from "../../../../../../features/profileSlice";
import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
import { updateProfile } from "../../../../../../features/authSlice";

export default function LookingForModal({ closeModal }) {
  const dispatch = useDispatch();
  const [updateLookingFor] = useUpdateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);
  const { desiredJobTitle, salary, location, jobType } = profileInfo?.profile?.lookingFor || {};

  const [titleField, setTitleField] = useState("");
  const [salaryField, setSalaryField] = useState("");
  const [locationField, setLocationField] = useState("");
  const [jobTypeField, setJobTypeField] = useState("");

  useEffect(() => {
    setTitleField(desiredJobTitle || "");
    setSalaryField(salary || "");
    setLocationField(location || "");
    setJobTypeField(jobType || "");

    if (desiredJobTitle && salary && location) {
      dispatch(setLooking(true));
    } else {
      dispatch(setLooking(false));
    }
  }, [desiredJobTitle, salary, location, jobType]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateData = {
        desiredJobTitle: titleField,
        salary: salaryField,
        location: locationField,
        jobType: jobTypeField,
      };
      console.log("Payload to be sent:", updateData);
      await updateLookingFor(updateData).unwrap();
      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...userInfo.profile,
            lookingFor: updateData,
          },
        }),
      );
      console.log("Profile updated");
      closeModal();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Looking For</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="desiredJobTitle">
            Desired Job Title
          </label>
          <input
            type="text"
            name="desiredJobTitle"
            id="desiredJobTitle"
            placeholder="Job title"
            className="input-style"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="salary">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            placeholder="e.g. £40,000"
            className="input-style"
            value={salaryField}
            onChange={(e) => setSalaryField(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            className="input-style"
            value={locationField}
            onChange={(e) => setLocationField(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="job-type">
            Job Type
          </label>
          <select
            name="job-type"
            id="job-type"
            className="input-style"
            value={jobTypeField}
            onChange={(e) => setJobTypeField(e.target.value)}
          >
            <option value="" disabled hidden>
              Select job type
            </option>
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
        >
          Save
        </button>
      </form>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLooking } from "../../../../../../features/profileSlice";
// import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
// import { updateProfile } from "../../../../../../features/authSlice";

// export default function LookingForModal({closeModal}) {
//   const dispatch = useDispatch();
//   const [updateLookingFor] = useUpdateProfileMutation();
//   const { userInfo } = useSelector((state) => state.auth);
//   const { profileInfo } = useSelector((state) => state.auth);
//   const { desiredJobTitle, salary, location, jobType } = profileInfo?.profile?.lookingFor || {};

//   const [titleField, setTitleField] = useState("");
//   const [salaryField, setSalaryField] = useState("");
//   const [locationField, setLocationField] = useState("");
//   const [jobTypeField, setJobTypeField] = useState("");

//   useEffect(() => {
//     setTitleField(desiredJobTitle || "");
//     setSalaryField(salary || "");
//     setLocationField(location || "");
//     setJobTypeField(jobType || "");

//     if (desiredJobTitle && salary && location && jobType) {
//       dispatch(setLooking(true));
//     } else {
//       dispatch(setLooking(false));
//     }

//   }, [desiredJobTitle, salary, location, jobType]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const updateData = {
//         desiredJobTitle: titleField,
//         salary: salaryField,
//         location: locationField,
//         jobType: jobTypeField,
//       };
//         console.log("Payload to be sent:", updateData);
//       await updateLookingFor(updateData).unwrap();
//       dispatch(
//         updateProfile({
//           ...userInfo,
//           profile: {
//             ...userInfo.profile,
//             lookingFor: updateData,
//           },
//         }),
//       );
//       console.log("Profile updated");
//       closeModal();
//     } catch (error) {
//       console.log("ERROR: ", error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="mb-3 text-xl font-bold">Looking For</h2>
//       <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-1">
//           <label className="label-style" htmlFor="job-title">
//             Desired Job Title
//           </label>
//           <input
//             type="text"
//             name="job-title"
//             id="job-title"
//             placeholder="Job title"
//             className="input-style"
//             value={titleField}
//             onChange={(e) => setTitleField(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="label-style" htmlFor="salary">
//             Salary
//           </label>
//           <input
//             type="text"
//             name="salary"
//             id="salary"
//             placeholder="e.g. £40,000"
//             className="input-style"
//             value={salaryField}
//             onChange={(e) => setSalaryField(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="label-style" htmlFor="location">
//             Location
//           </label>
//           <input
//             type="text"
//             name="location"
//             id="location"
//             placeholder="Location"
//             className="input-style"
//             value={locationField}
//             onChange={(e) => setLocationField(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="label-style" htmlFor="job-type">
//             Job Type
//           </label>
//           <select
//             name="job-type"
//             id="job-type"
//             className="input-style"
//             value={jobTypeField}
//             onChange={(e) => setJobTypeField(e.target.value)}
//           >
//             <option value="" disabled hidden>
//               Select job type
//             </option>
//             <option value="Permanent">Permanent</option>
//             <option value="Contract">Contract</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }
