import { useState } from "react";
import {Link} from "react-router-dom";
import { IoHeartOutline, IoMenuSharp } from "react-icons/io5";
import logo from "../../assets/reed-logo.webp";
import SideMenu from "../ui-components/SideMenu";

export default function Header() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  return (
    <div className="border-b fixed bg-white w-full z-[1000]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex h-[50px] items-center justify-between border-b-slate-300 px-4 lg:h-[60px]">
          <div className="flex items-center gap-5 xl:gap-10">
            <IoMenuSharp
              className="cursor-pointer text-xl lg:hidden"
              onClick={() => setIsMobMenuOpen(true)}
            />
            <Link to={`/`}>
              <img src={logo} alt="Reed" className="h-[30px]" />
            </Link>
            <a
              href="#"
              className="hidden h-[50px] flex-col justify-end gap-2 font-medium after:block after:w-full after:border-b-[5px] after:border-rdpink after:content-[''] md:flex lg:h-[60px] lg:gap-[13px]"
            >
              Jobs
            </a>
            <a
              href="#"
              className="hidden h-[50px] items-center justify-end gap-2 font-medium before:block before:h-[80%] before:border-l-[1px] before:border-[#9d9d9d] before:content-[''] lg:flex"
            >
              <p className="font-normal">Recruting?</p>
              <span className="font-medium">Post a job</span>
            </a>
          </div>
          <div className="flex items-center gap-4 xl:gap-10">
            <div className="flex items-center">
              <a
                href="#"
                className="hidden w-full max-w-[300px] rounded-[4px] border-2 border-[#081351] px-3 py-1 text-center font-medium text-[#081351] md:block"
              >
                Register CV
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link to={`/login`} className="font-medium">
                Sign in
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <IoHeartOutline className="text-xl" />
              <a href="#" className="hidden font-medium md:block">
                Saved jobs
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobMenuOpen && (
        <SideMenu closeModal={() => setIsMobMenuOpen(false)}>
          <nav className="flex flex-col gap-1 text-white">
            <a
              href="#"
              className="flex h-[50px] w-full items-center justify-start gap-8 py-2 pr-[55px] font-medium before:block before:h-[100%] before:border-l-[6px] before:border-rdpink before:content-['']"
            >
              <strong className="">Jobs</strong>
            </a>
            <a
              href="#"
              className="flex h-[50px] w-full items-center justify-start gap-8 py-2 pr-[55px] font-medium before:block before:h-[100%]"
            >
              <div className="flex items-center gap-1">
                <p className="font-normal">Recruting?</p>
                <span className="font-medium">Post a job</span>
              </div>
            </a>
          </nav>
        </SideMenu>
      )}
    </div>
  );
}
