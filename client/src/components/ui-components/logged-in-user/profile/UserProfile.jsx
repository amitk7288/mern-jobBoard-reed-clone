import { useState } from "react";
import JobSearch from "../../../../routes/JobSearch";
import ModalDropDown from "../../../ui-components/ModalDropDown";
import MobileJobSearch from "../../../../routes/MobileJobSearch";
import InfoPod from "../../../ui-components/InfoPod";
import ProfileComplete from "../ProfileComplete";
import About from "../About";
import LookingFor from "./widgets/LookingFor";
import Status from "./widgets/Status";
import Experience from "./widgets/Experience";
import CV from "./widgets/CV";
import Qualifications from "./widgets/Qualifications";
import {
  HiMagnifyingGlass,
} from "react-icons/hi2";


export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <JobSearch />
      <div>
        <div className="border-b bg-white p-[15px] lg:hidden">
          <div
            className="flex items-center gap-3 border border-rdblack px-3 py-1.5"
            onClick={() => setIsOpen(true)}
          >
            <HiMagnifyingGlass className="text-2xl text-rdpink" />
            <p>Developer jobs</p>
          </div>
        </div>
        <div className="border-t bg-[#f8f8f8] px-3 py-5 2xl:px-[50px]">
          <div className="mx-auto max-w-[1280px] md:flex md:gap-6">
            <div className="flex basis-[35%] flex-col gap-3 lg:basis-[30%] xl:basis-[30%]">
              <About />
              <InfoPod title={`Profile`}>
                <ProfileComplete />
              </InfoPod>
            </div>
            <div className="mt-3 flex basis-[80%] flex-col gap-3 md:mt-0">
              <CV />
              <LookingFor />
              <Status />
              <Experience />
              <Qualifications />
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <ModalDropDown closeModal={() => setIsOpen(false)}>
          <MobileJobSearch />
        </ModalDropDown>
      ) : null}
    </>
  );
}
