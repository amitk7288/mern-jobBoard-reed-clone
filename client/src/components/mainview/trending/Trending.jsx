import TrendingBtn from "./TrendingBtn"
import {
  IoChevronUp,
  IoChevronDownOutline,
} from "react-icons/io5";

export default function Trending() {
  return (
    <div className="px-[23px]">
      <p className="my-5 text-center text-xl font-bold lg:text-3xl">
        Trending Jobs
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <TrendingBtn title={`Work from home`} sector={`Work%20from%20home%20`} />
        <TrendingBtn title={`Immediate`} sector={`Immediate`} />
        <TrendingBtn title={`Manager`} sector={`Manager`} />
        <TrendingBtn title={`Finance`} sector={`Finance`} />
        <TrendingBtn title={`Warehouse`} sector={`Warehouse`} />
        <TrendingBtn title={`Accountant`} sector={`Accountant`} />
      </div>
      <div className="p-[15px] md:hidden">
        <a
          href="#"
          className="flex items-center justify-center gap-1 font-medium text-rdlightBlue md:pt-4"
        >
          <p className="hover:underline">See more</p>
          <IoChevronDownOutline />
        </a>
      </div>
    </div>
  );
}