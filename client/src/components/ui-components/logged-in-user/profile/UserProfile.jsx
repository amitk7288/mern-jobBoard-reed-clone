import { useState } from "react";
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
      <div className="mx-auto hidden lg:block lg:max-w-[1280px] lg:px-[30px] lg:py-[30px]">
        <p className="pt-[15px] text-lg font-bold lg:relative lg:bottom-[10px] lg:pt-0 lg:text-xl">
          Search
        </p>
        <form className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="md:basis-[40%]">
            <label
              htmlFor="job-title"
              className="mb-1 text-lg text-rdblack md:block"
            >
              What
            </label>
            <input
              type="search"
              name="job-title"
              placeholder={`e.g. "account manager"`}
              className="w-full rounded-md border border-rdblack px-4 py-2.5 lg:py-3"
            />
          </div>
          <div className="md:basis-[40%]">
            <label
              htmlFor="job-location"
              className="mb-1 text-lg text-rdblack md:block"
            >
              Where
            </label>
            <input
              type="search"
              name="job-location"
              placeholder={`town or postcode"`}
              className="w-full rounded-md border border-rdblack px-4 py-2.5 md:block lg:py-3"
            />
          </div>
          <button
            type="submit"
            className="mb-[20px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885] md:mb-[0px] md:flex md:basis-[20%] md:justify-center md:self-end md:px-4 md:py-[13px] lg:py-[13px]"
          >
            Search jobs
          </button>
        </form>
      </div>
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
