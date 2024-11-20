import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../../../../../features/profileSlice";
import { useUpdateProfileMutation } from "../../../../../../features/usersApiSlice";
import { updateProfile } from "../../../../../../features/authSlice";

export default function StatusModal({
  employmentStatus,
  noticePeriod,
  workEligibility,
  closeModal,
}) {

    const dispatch = useDispatch();
    const [updateStatus] = useUpdateProfileMutation();
    const { profileInfo } = useSelector((state) => state.auth);
    const { userInfo } = useSelector((state) => state.auth);

    const [employmentField, setEmploymentField] = useState("");
    const [noticeField, setNoticeField] = useState("");
    const [eligibleField, setEligibleField] = useState(false);

    useEffect(() => {
      setEmploymentField(employmentStatus || "");
      setNoticeField(noticePeriod || "");
      setEligibleField(workEligibility ?? false);

      if (employmentStatus && noticePeriod) {
        dispatch(setStatus(true));
      } else {
        dispatch(setStatus(false));
      }

    }, [employmentStatus, noticePeriod, workEligibility]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const updateData = {
          employmentStatus: employmentField,
          noticePeriod: noticeField,
          workEligibility: Boolean(eligibleField),
        };
        await updateStatus(updateData).unwrap();
        dispatch(
          updateProfile({
            ...userInfo,
            profile: {
              ...profileInfo.profile,
              status: updateData,
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
      <h2 className="mb-3 text-xl font-bold">Status and availability</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="employment-status">
            Employment Status
          </label>
          <select
            name="employment-status"
            id="employment-status"
            className="input-style"
            value={employmentField}
            onChange={(e) => setEmploymentField(e.target.value)}
            required
          >
            <option value="" disabled>
              Select employment status
            </option>
            <option value="Employed Full-time">Employed Full-time</option>
            <option value="Employed Part-time">Employed Part-time</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="notice-period">
            Notice Period
          </label>
          <input
            type="text"
            name="notice-period"
            id="notice-period"
            placeholder="e.g. 2 weeks"
            className="input-style"
            value={noticeField}
            onChange={(e) => setNoticeField(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="work-eligibility-checkbox">
            Work Eligibility
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="work-eligibility"
              id="work-eligibility-checkbox"
              className="mr-2"
              checked={eligibleField}
              onChange={(e) => setEligibleField((prevState) => !prevState)}
            />
            <span>I am eligible to work in the UK</span>
          </label>
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
