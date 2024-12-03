import { useSelector } from "react-redux";
import InfoPod from "../InfoPod";
import AboutModal from "./profile/widgets/modal-content/AboutModal";
import { LuPenSquare } from "react-icons/lu";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function About() {
  const { userInfo } = useSelector((state) => state.auth);
  const { profileInfo } = useSelector((state) => state.auth);
  const { role, tel } = profileInfo?.profile?.about || {};

  //const profilePic = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

  return (
    <InfoPod
      title={`About you`}
      headerLink={`Edit`}
      modalContent={
        <AboutModal
          name={userInfo.name}
          role={role}
          tel={tel}
          email={userInfo.email}
          profilePic={userInfo.profilePic}
        />
      }
      headerIcon={<LuPenSquare />}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-bold text-rdblack">{userInfo.name}</p>
          {/* <img
            className="w-10 rounded-full"
            src={profileInfo.profilePic ? profileInfo.profilePic : profilePic}
            alt="profile pic"
          /> */}
        </div>

        <p className="text-base font-bold text-rdblack">{role}</p>
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-lg" />
          <p>{tel}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineEnvelope className="text-lg" />
          <p>{userInfo.email}</p>
        </div>
      </div>
    </InfoPod>
  );
}
