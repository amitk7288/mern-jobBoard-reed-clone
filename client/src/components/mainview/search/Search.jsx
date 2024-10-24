import { IoChevronForward } from "react-icons/io5";
import jobHeroImg from "../../../assets/job-hero-img.png";
import jobHeroTitle from "../../../assets/job-hero-title.svg";

export default function Search() {
  return (
    <div>
      <div className="bg-rdpink flex h-[240px] w-full flex-col justify-center pl-4 md:h-[400px] md:px-10 lg:content-center lg:px-[140px]">
        <div className="mx-auto">
          <div className="flex items-center lg:w-[850px]">
            <div className="basis-[50%] lg:justify-center lg:flex">
              <img
                src={jobHeroTitle}
                alt="love mondays"
                className="w-[200px] md:w-[370px]"
              />
            </div>
            <div className="flex basis-[50%] justify-end lg:justify-center">
              <img
                src={jobHeroImg}
                alt="hero img"
                className="w-[160px] md:w-[305px]"
              />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white md:relative md:bottom-[80px] md:text-4xl lg:left-[26px] lg:bottom-[60px]">
            Find a job you’ll love
          </h1>
        </div>
      </div>
      <div className="bg-[#081351] p-4">
        <form className="flex flex-col gap-5">
          <input
            type="search"
            placeholder={`e.g. "account manager"`}
            className="w-full rounded-md border px-4 py-2.5"
          />
          <button
            type="submit"
            className="mb-[20px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885]"
          >
            Search 151, 262 jobs
          </button>
        </form>
        <a
          href="#"
          className="flex items-center justify-end gap-1 font-medium text-white"
        >
          <p className="hover:underline">Browse jobs</p>
          <IoChevronForward />
        </a>
      </div>
    </div>
  );
}
