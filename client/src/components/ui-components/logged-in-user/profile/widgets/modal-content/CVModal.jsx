import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCV } from "../../../../../../features/profileSlice";
import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
import { updateProfile } from "../../../../../../features/authSlice";
import { LuUpload } from "react-icons/lu";

export default function CVModal({ cvValue, closeModal }) {
  const dispatch = useDispatch();
  const [updateCV] = useUpdateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);

  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setFileName(cvValue);

    if (cvValue) {
      dispatch(setCV(true));
    } else {
      dispatch(setCV(false));
    }

  }, [cvValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();

    try {
      const updateData = {
        cv: fileName,
      };
      await updateCV(updateData).unwrap();
      dispatch(
        updateProfile({
          ...userInfo,
          profile: {
            ...profileInfo.profile,
            cv: fileName,
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
      <h2 className="mb-3 text-xl font-bold">CV</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <input
            type="file"
            id="upload"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label
            htmlFor="upload"
            className="w-fit cursor-pointer rounded-md border bg-slate-600 px-3 py-2 text-white"
          >
            Choose File
          </label>
          <span className="ml-2" id="filename">
            {fileName ? fileName : 'Upload your CV'}
          </span>
        </div>
        <button
          type="submit"
          className="mt-3 flex w-fit items-center gap-1.5 self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
        >
          <LuUpload className="mb-[2px]" />
          <p>Upload</p>
        </button>
      </form>
    </div>
  );
}
