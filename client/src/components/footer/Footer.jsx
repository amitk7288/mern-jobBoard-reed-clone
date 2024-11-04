import { useState } from "react";
import lovemondaysImg from "../../assets/love-mondays.png";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-rdblue lg:grid lg:justify-center lg:py-[45px] pt-10">
      <ul className="flex flex-col justify-between lg:hidden">
        <li className="w-full border-b border-b-[#535a86]">
          <nav>
            <h3
              onClick={() => toggleSection("jobs")}
              className="cursor-pointer px-4 py-5 font-medium text-white"
            >
              JOBS
            </h3>
            {openSection === "jobs" && (
              <ul className="flex flex-col gap-2 space-y-2 bg-[#0b143b] px-6 py-4">
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </li>

        <li className="w-full border-b border-b-[#535a86]">
          <nav>
            <h3
              onClick={() => toggleSection("recruiter")}
              className="cursor-pointer px-4 py-5 font-medium text-white"
            >
              RECRUITER
            </h3>
            {openSection === "recruiter" && (
              <ul className="flex flex-col gap-2 space-y-2 bg-[#0b143b] px-6 py-4">
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </li>

        <li className="w-full border-b border-b-[#535a86]">
          <nav>
            <h3
              onClick={() => toggleSection("courses")}
              className="cursor-pointer px-4 py-5 font-medium text-white"
            >
              COURSES
            </h3>
            {openSection === "courses" && (
              <ul className="flex flex-col gap-2 space-y-2 bg-[#0b143b] px-6 py-4">
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </li>

        <li className="w-full border-b border-b-[#535a86]">
          <nav>
            <h3
              onClick={() => toggleSection("more")}
              className="cursor-pointer px-4 py-5 font-medium text-white"
            >
              MORE FROM Reed.co.uk
            </h3>
            {openSection === "more" && (
              <ul className="flex flex-col gap-2 space-y-2 bg-[#0b143b] px-6 py-4">
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </li>

        <li className="w-full border-b border-b-[#535a86]">
          <nav>
            <h3
              onClick={() => toggleSection("reed")}
              className="cursor-pointer px-4 py-5 font-medium text-white"
            >
              REED
            </h3>
            {openSection === "reed" && (
              <ul className="flex flex-col gap-2 space-y-2 bg-[#0b143b] px-6 py-4">
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-medium text-white">
                    Link
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </li>
      </ul>
      <div className="flex flex-col gap-5">
        <ul className="hidden bg-rdblue lg:grid lg:min-w-[1024px] lg:grid-cols-5 lg:gap-5">
          <li>
            <h3 className="mb-5 font-medium text-white">JOBS</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white">
              <a href="#">Link</a>
              <a href="#">Link</a>
            </nav>
          </li>
          <li>
            <h3 className="mb-5 font-medium text-white">RECRUITER</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white">
              <a href="#">Link</a>
              <a href="#">Link</a>
            </nav>
          </li>
          <li>
            <h3 className="mb-5 font-medium text-white">COURSES</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white">
              <a href="#">Link</a>
              <a href="#">Link</a>
            </nav>
          </li>
          <li>
            <h3 className="mb-5 font-medium text-white">MORE</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white">
              <a href="#">Link</a>
              <a href="#">Link</a>
            </nav>
          </li>
          <li>
            <h3 className="mb-5 font-medium text-white">REED</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white">
              <a href="#">Link</a>
              <a href="#">Link</a>
            </nav>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center py-[20px] lg:items-start">
          <div>
            <img
              src={lovemondaysImg}
              alt="love mondays"
              className="w-[180px] lg:relative lg:right-[10px]"
            />
          </div>
          <div>
            <p className="text-center text-xs text-white">
              COPYRIGHT Reed.co.uk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
