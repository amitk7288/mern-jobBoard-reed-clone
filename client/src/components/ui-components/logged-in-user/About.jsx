import InfoPod from "../InfoPod"
import AboutModal from "./profile/widgets/modal-content/AboutModal";
import { LuPenSquare } from "react-icons/lu";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export default function About() {
  return (
      <InfoPod
        title={`About you`}
        headerLink={`Edit`}
        modalContent={<AboutModal />}
        headerIcon={<LuPenSquare />}
      >
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-rdblack">Amit Kadara</p>
          <p className="text-base font-bold text-rdblack">Web Developer</p>
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-lg" />
            <p>07841 578 679</p>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineEnvelope className="text-lg" />
            <p>amitkadara@gmail.com</p>
          </div>
        </div>
      </InfoPod>
  );
}