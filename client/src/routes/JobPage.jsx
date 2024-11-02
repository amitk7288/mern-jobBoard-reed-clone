import { useState } from "react";
import JobSearch from "./JobSearch";
import ModalDropDown from "../components/ui-components/ModalDropDown";
import MobileJobSearch from "./MobileJobSearch";
import {
  RiMoneyPoundCircleLine,
  RiTimeLine,
  RiMapPin2Line,
} from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";

export default function JobPage() {
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
            <p>Developer jobs</p>
          </div>
        </div>
        <div className="border-t bg-[#f8f8f8] px-3 pt-5 pb-10 2xl:px-[50px]">
          <div className="mx-auto block max-w-[1280px] py-[20px]">
            <p>Back to search results</p>
          </div>
          <div className="mx-auto max-w-[1280px] md:flex md:gap-6">
            <div className="basis-[100%]">
              <div id="main" className="flex flex-col gap-3">
                <div className="flex flex-col gap-6 rounded-lg border border-[#c8c8c8] bg-white p-4 text-[#0f151a] md:w-[100%] md:px-[50px] md:py-[40px]">
                  {/* job info */}
                  <div className="flex flex-col gap-16 lg:items-center lg:bg-[#f8f8f8] lg:py-7 lg:gap-8">
                    <div className="text-sm md:text-base lg:text-center flex flex-col gap-1">
                      <p className="text-xl font-bold text-rdblack md:text-4xl">
                        Web Developer
                      </p>
                      <p>
                        Posted 15 October by{" "}
                        <span className="font-medium text-rdlightBlue underline">
                          ITSS Recruitment Ltd
                        </span>
                      </p>
                      <p className="font-bold text-[#4d5054]">Easy Apply</p>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row lg:items-center">
                      <div className="meta grid basis-[75%] grid-cols-1 gap-1 rounded-md bg-[#f8f8f8] p-4 md:grid-cols-3">
                        <div className="salary flex items-center gap-2">
                          <RiMoneyPoundCircleLine className="text-xl" />{" "}
                          <p>£55,000 - £70,000</p>
                        </div>
                        <div className="time flex items-center gap-2">
                          <RiTimeLine className="text-xl" />
                          <p>Permanent, full</p>
                        </div>
                        <div className="location flex items-center gap-2">
                          <RiMapPin2Line className="text-xl" />
                          <p>Warwick, Warwickshire</p>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="mx-auto block w-[260px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885]"
                        >
                          Apply now
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* job details */}
                  <div className="flex flex-col gap-6">
                    <div className="rounded-lg border border-[#081351] p-[15px] md:block">
                      <p>company logo</p>
                    </div>
                    <div>
                      <p>
                        Junior or Mid-level Web Developer - Tamworth,
                        Staffordshire - Up to £32,000 - Some hybrid working
                        available We are looking for a highly motivated Web
                        Developer to join an established marketing agency. They
                        have a range of international and UK based B2B and B2C
                        clients, including SMEs and global multinationals. This
                        exciting opportunity will suit a Web Developer who has
                        commercial experience working with Wordpress, PHP,
                        JavaScript, HTML, CSS and SQL. They are looking to train
                        and continue the progression of a hungry and motivated
                        junior or mid-level web developer. You will join a team
                        of designers, developers and client specialists to code
                        and optimise websites, emails and apps for existing and
                        recent new clients. * Experience developing websites in
                        popular content management systems and frameworks such
                        as WordPress. If you have any experience in LAMP
                        development or Magento 2 it would be beneficial but not
                        essential. * The ability to create custom themes and
                        plugins to meet client needs * Experience with HTML,
                        CSS, JavaScript, PHP, SQL, Excel * The ability to manage
                        your own time and projects * Work in collaboration with
                        the design team and clients to develop websites on time
                        and on budget You will be required to develop quality
                        websites to design specifications using best practise
                        coding methods, that are mobile adaptive and functional
                        across all modern web browsers in line with the client
                        specifications. This company can offer a relaxed but
                        rewarding environment where you will be able to continue
                        your career with web development whilst working with
                        Wordpress, PHP, JavaScript, HTML and CSS. You will need
                        to live within commuting distance from Tamworth and
                        sponsorship will not be provided so you will need to
                        have a valid right to work in the UK. We are
                        interviewing currently so apply now for immediate
                        consideration for the Web Developer position or contact
                        Stuart Barnes at ITSS Recruitment for further
                        information.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <button
                        type="submit"
                        className="mx-auto block w-[260px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885]"
                      >
                        Apply now
                      </button>
                      <button
                        type="submit"
                        className="mx-auto w-[260px] rounded-md border-2 border-rdblack bg-[#ffffff] px-3 py-2 font-medium text-rdblack hover:bg-rdblack hover:text-white flex items-center justify-center gap-1"
                      >
                        <IoHeartOutline className="text-lg" />
                        <p>Save job</p>
                      </button>
                      <button
                        type="submit"
                        className="mx-auto block w-[260px] rounded-md border-2 border-rdblack bg-[#ffffff] px-3 py-2 font-medium text-rdblack hover:bg-rdblack hover:text-white"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
