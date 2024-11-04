import { Link } from "react-router-dom";
import {
  IoHeartOutline,
} from "react-icons/io5";
import {
  RiMoneyPoundCircleLine,
  RiTimeLine,
  RiMapPin2Line,
} from "react-icons/ri";
export default function JobCardMini({title}) {

  return (
    <div className="relative flex flex-col gap-2.5 rounded-md border border-[#c8c8c8] bg-white px-3 py-3 text-[#0f151a]">
      <div id="heart" className="absolute right-3 text-2xl">
        <IoHeartOutline />
      </div>
      <div id="header" className="grid grid-cols-[90%_auto] justify-between">
        <div className="flex flex-col gap-1">
          <div id="logo" className="hidden text-sm font-bold md:block md:mb-3">
            <div className="border-2 border-[#c8c8c8] rounded-lg p-[5px] w-fit">
              <img
                src="https://resources.reed.co.uk/profileimages/logos/thumbs/Logo_28670.png"
                alt="company logo"
                className="w-[85px] h-auto"
              />
            </div>
          </div>
          <Link to={`/jobpage`} className="jobtitle font-medium text-[#1e1ef0]">
           {title}
          </Link>
          <p className="date text-sm font-normal">
            Posted by{" "}
            <a href="#" className="font-medium text-[#1e1ef0]">
              Searchability
            </a>
          </p>
        </div>
      </div>
      <div id="main" className="meta grid text-sm md:text-base">
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
    </div>
  );
}
