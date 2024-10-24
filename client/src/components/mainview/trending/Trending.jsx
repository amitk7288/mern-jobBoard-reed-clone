import TrendingBtn from "./TrendingBtn"
import {
  IoChevronUp,
  IoChevronDownOutline,
} from "react-icons/io5";

export default function Trending() {
  return (
    <div>
      <p className="my-5 text-center text-xl font-bold lg:text-3xl">
        Trending Jobs
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <TrendingBtn title={`Work from home`} />
        <TrendingBtn title={`Immediate`} />
        <TrendingBtn title={`Manager`} />
        <TrendingBtn title={`Finance`} />
        <TrendingBtn title={`Warehouse`} />
        <TrendingBtn title={`Accountant`} />
      </div>
      <div className="md:hidden p-[15px]">
        <a
          href="#"
          className="text-rdlightBlue md:pt-4 flex items-center justify-center gap-1 font-medium"
        >
          <p className="hover:underline">See more</p>
          <IoChevronDownOutline />
        </a>
      </div>
    </div>
  );
}