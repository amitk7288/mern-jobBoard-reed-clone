import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbout } from "../../../../../../features/profileSlice";
import {useUpdateProfileMutation} from "../../../../../../features/usersApiSlice";
import {updateProfile} from "../../../../../../features/authSlice";

export default function AboutModal({ role, tel, name, email, closeModal }) {
  const dispatch = useDispatch();
  const [updateAbout] = useUpdateProfileMutation();
  const { profileInfo } = useSelector((state) => state.auth);

  const [nameField, setNameField] = useState("");
  const [roleField, setRoleField] = useState("");
  const [telField, setTelField] = useState("");
  const [emailField, setEmailField] = useState("");

  useEffect(() => {
    setNameField(name || "");
    setRoleField(role || "");
    setTelField(tel || "");
    setEmailField(email || "");

    if (name && role && tel && email) {
      dispatch(setAbout(true));
    } else {
      dispatch(setAbout(false));
    }

  }, [name, role, tel, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateData = {
        name: nameField,
        role: roleField,
        tel: telField,
        email: emailField,
      };
      await updateAbout(updateData).unwrap();
      dispatch(
        updateProfile({
          name: updateData.name,
          email: updateData.email,
          profile: {
            ...profileInfo.profile,
            about: updateData,
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
      <h2 className="mb-3 text-xl font-bold">About you</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="first-name">
            First Name*
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First name"
            className="input-style"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="role">
            Role*
          </label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            className="input-style"
            value={roleField}
            onChange={(e) => setRoleField(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="tel">
            Contact number
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Contact number"
            className="input-style"
            value={telField}
            onChange={(e) => setTelField(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input-style"
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
          />
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
