import { IoChevronForward } from "react-icons/io5";
import jobHeroImg from "../../../assets/job-hero-img.png";
import jobHeroTitle from "../../../assets/job-hero-title.svg";

export default function Search() {
  return (
    <div className="md:bg-rdpink">
      <div className="bg-rdpink flex h-[240px] w-full flex-col justify-center pl-4 md:h-[400px] md:px-10 lg:content-center lg:px-[140px]">
        <div className="mx-auto">
          <div className="flex items-center lg:w-[850px]">
            <div className="basis-[50%] lg:flex lg:justify-center">
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
          <h1 className="text-xl font-bold text-white md:relative md:bottom-[80px] md:text-4xl lg:bottom-[60px] lg:left-[26px]">
            Find a job you’ll love
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1220px]">
        <div className="max-w-[1220px] bg-[#081351] p-4 md:mx-[30px] md:rounded-lg md:px-6 lg:mx-0">
          <form className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="md:basis-[40%]">
              <label
                htmlFor="job-title"
                className="mb-1 hidden text-lg text-white md:block"
              >
                What
              </label>
              <input
                type="search"
                name="job-title"
                placeholder={`e.g. "account manager"`}
                className="w-full rounded-md px-4 py-2.5 lg:py-3"
              />
            </div>
            <div className="hidden md:block md:basis-[40%]">
              <label htmlFor="job-location" className="mb-1 text-lg text-white">
                Where
              </label>
              <input
                type="search"
                name="job-location"
                placeholder={`town or postcode"`}
                className="hidden w-full rounded-md px-4 py-2.5 md:block lg:py-3"
              />
            </div>
            <button
              type="submit"
              className="mb-[20px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885] md:mb-[0px] md:flex md:basis-[20%] md:justify-center md:self-end md:px-4 md:py-2.5 lg:py-3"
            >
              Search jobs
            </button>
          </form>
          <a
            href="#"
            className="flex items-center justify-end gap-1 font-medium text-white md:pt-4"
          >
            <p className="hover:underline">Browse jobs</p>
            <IoChevronForward />
          </a>
        </div>
        <div className="mx-[35px] py-4 text-lg font-bold text-white">
          <p>Search 150,098 new jobs - 6,055 added in the last 24 hours</p>
        </div>
      </div>
    </div>
  );
}
