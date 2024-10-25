import {
  IoHeartOutline,
  IoChevronUp,
  IoChevronDownOutline,
  IoClose,
} from "react-icons/io5";
import { HiMiniBolt } from "react-icons/hi2";
import {
  RiMoneyPoundCircleLine,
  RiTimeLine,
  RiMapPin2Line,
} from "react-icons/ri";

export default function JobCard() {
  return (
    <div className="bg-white flex flex-col gap-2.5 rounded-md border border-[#c8c8c8] px-3 py-2.5 text-[#0f151a] md:w-[100%]">
      <div id="header" className="flex items-center justify-between">
        <div className="text-sm font-bold">
          <div className="flex items-center gap-1">
            <HiMiniBolt className="text-[#FF00CD]" />
            <p className="text-[#4d5054] s:text-base">Easy Apply</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl">
          <IoHeartOutline />
          <IoClose />
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div id="body" className="flex flex-col gap-2.5">
          <div>
            <p className="jobtitle text-lg font-bold text-[#1e1ef0] md:text-2xl">
              Senior Software Developer
            </p>
            <p className="date text-sm font-normal">
              13 septemrber by{" "}
              <a href="#" className="font-medium text-[#1e1ef0]">
                Searchability
              </a>
            </p>
          </div>
          <div className="meta grid grid-cols-2 text-sm md:text-base">
            <div className="salary flex items-center gap-2">
              <RiMoneyPoundCircleLine className="text-base font-medium" />{" "}
              <p>£55,000 - £70,000</p>
            </div>
            <div className="time flex items-center gap-2">
              <RiTimeLine className="text-base font-medium" />
              <p>Permanent, full</p>
            </div>
            <div className="location flex items-center gap-2">
              <RiMapPin2Line className="text-base font-medium" />
              <p>Warwick, Warwickshire</p>
            </div>
          </div>
          <div className="seemore text-sm md:text-base">
            <a href="#" className="flex items-center gap-2">
              <IoChevronDownOutline className="text-base font-medium" />
              <p className="font-medium">See more</p>
            </a>
            <div className="hidden">description</div>
          </div>
        </div>
        <div
          id="footer"
          className="flex items-center justify-center md:flex-col md:gap-4"
        >
          <div className="hidden rounded-lg border border-[#081351] p-[15px] md:block">
            <p>company logo</p>
          </div>
          <a
            href="#"
            className="block w-full max-w-[300px] rounded-[4px] border-2 border-[#081351] px-3 py-1.5 text-center font-medium text-[#081351] mt-4 bg-white"
          >
            Easy apply
          </a>
        </div>
      </div>
    </div>
  );
}
