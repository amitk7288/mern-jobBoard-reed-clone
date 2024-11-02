import { useState } from "react";
import JobCard from "../components/JobCard";
import JobSearch from "./JobSearch";
import ModalDropDown from "../components/ui-components/ModalDropDown";
import MobileJobSearch from "./MobileJobSearch";

import {
  HiMagnifyingGlass,
  HiOutlineBellAlert,
  HiAdjustmentsVertical,
  HiMiniArrowSmallRight, 
  HiMiniArrowSmallLeft
} from "react-icons/hi2";


export default function JobResultsPage() {
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
            <HiMagnifyingGlass className="text-2xl text-rdpink" />
            <p>Developer jobs</p>
          </div>
        </div>
        <div className="border-t bg-[#f8f8f8] px-3 py-5 2xl:px-[50px]">
          <div className="mx-auto block max-w-[1280px] py-[20px]">
            <h1 className="text-lg font-bold">4,789 Developer Jobs</h1>
          </div>
          <div className="mx-auto max-w-[1280px] md:flex md:gap-6">
            <div id="" className="basis-[35%] lg:basis-[30%] xl:basis-[20%]">
              <div className="flex items-center justify-center gap-5 pb-[20px] md:flex-col">
                <button className="flex w-full max-w-[300px] items-center justify-center gap-1 rounded-[4px] border-2 border-[#081351] bg-white px-3 py-1.5 text-center font-medium text-[#081351] md:hidden">
                  <HiAdjustmentsVertical className="text-xl" />
                  <p className="text-sm">Filter</p>
                </button>
                <button className="flex w-full max-w-[300px] items-center justify-center gap-1 rounded-[4px] border-2 border-[#081351] bg-white px-3 py-1.5 text-center font-medium text-[#081351]">
                  <HiOutlineBellAlert className="text-xl" />
                  <p className="text-sm">Job Alerts</p>
                </button>
              </div>
              <div
                id="filter your search"
                className="hidden flex-col rounded-md border border-[#c8c8c8] bg-white py-2.5 pt-5 text-[#0f151a] md:flex"
              >
                <p className="px-3 text-lg font-bold">Filter your search</p>
                <div>
                  <div id="filter options" className="">
                    <div id="salary range" className="border-b px-4 py-[15px]">
                      <p className="pb-3 font-bold">Salary range</p>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="from-salary">From: </label>
                          <select
                            name="from-salary"
                            id="from-salary"
                            className="rounded-md border border-rdblack py-[5px] pl-[10px] pr-[20px]"
                          >
                            <option value="0">£ Any</option>
                            <option value="10000">Up to £10,000</option>
                            <option value="12000">£12,000</option>
                            <option value="14000">£14,000</option>
                            <option value="16000">£16,000</option>
                            <option value="18000">£18,000</option>
                            <option value="20000">£20,000</option>
                            <option value="22000">£22,000</option>
                            <option value="24000">£24,000</option>
                            <option value="26000">£26,000</option>
                            <option value="28000">£28,000</option>
                            <option value="30000">£30,000</option>
                            <option value="32000">£32,000</option>
                            <option value="34000">£34,000</option>
                            <option value="36000">£36,000</option>
                            <option value="38000">£38,000</option>
                            <option value="40000">£40,000</option>
                            <option value="42000">£42,000</option>
                            <option value="44000">£44,000</option>
                            <option value="46000">£46,000</option>
                            <option value="48000">£48,000</option>
                            <option value="50000">£50,000</option>
                            <option value="55000">£55,000</option>
                            <option value="60000">£60,000</option>
                            <option value="65000">£65,000</option>
                            <option value="70000">£70,000</option>
                            <option value="75000">£75,000</option>
                            <option value="80000">£80,000</option>
                            <option value="85000">£85,000</option>
                            <option value="90000">£90,000</option>
                            <option value="95000">£95,000</option>
                            <option value="100000">£100,000+</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="to-salary">To: </label>
                          <select
                            name="to-salary"
                            id="to-salary"
                            className="rounded-md border border-rdblack py-[5px] pl-[10px] pr-[20px]"
                          >
                            <option value="0">£ Any</option>
                            <option value="10000">Up to £10,000</option>
                            <option value="12000">£12,000</option>
                            <option value="14000">£14,000</option>
                            <option value="16000">£16,000</option>
                            <option value="18000">£18,000</option>
                            <option value="20000">£20,000</option>
                            <option value="22000">£22,000</option>
                            <option value="24000">£24,000</option>
                            <option value="26000">£26,000</option>
                            <option value="28000">£28,000</option>
                            <option value="30000">£30,000</option>
                            <option value="32000">£32,000</option>
                            <option value="34000">£34,000</option>
                            <option value="36000">£36,000</option>
                            <option value="38000">£38,000</option>
                            <option value="40000">£40,000</option>
                            <option value="42000">£42,000</option>
                            <option value="44000">£44,000</option>
                            <option value="46000">£46,000</option>
                            <option value="48000">£48,000</option>
                            <option value="50000">£50,000</option>
                            <option value="55000">£55,000</option>
                            <option value="60000">£60,000</option>
                            <option value="65000">£65,000</option>
                            <option value="70000">£70,000</option>
                            <option value="75000">£75,000</option>
                            <option value="80000">£80,000</option>
                            <option value="85000">£85,000</option>
                            <option value="90000">£90,000</option>
                            <option value="95000">£95,000</option>
                            <option value="100000">£100,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="job type" className="border-b px-4 py-[15px]">
                      <p className="pb-3 font-bold">Job type</p>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="permanent"
                            id="permanent"
                          />
                          <label htmlFor="permanent">
                            Permanent <span>(268)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="temporary"
                            id="temporary"
                          />
                          <label htmlFor="temporary">
                            Temporary <span>(268)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="contract"
                            id="contract"
                          />
                          <label htmlFor="contract">
                            Contract <span>(268)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="full-time"
                            id="full-time"
                          />
                          <label htmlFor="full-time">
                            Full-time <span>(268)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="part-time"
                            id="part-time"
                          />
                          <label htmlFor="part-time">
                            Part-time <span>(268)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="work-from-home"
                            id="work-from-home"
                          />
                          <label htmlFor="work-from-home">
                            Work from home <span>(268)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div id="date posted" className="px-4 py-[15px]">
                      <div>
                        <p className="pb-3 font-bold">Date posted</p>
                        <select
                          name="date-posted"
                          id="date-posted"
                          className="w-full rounded-md border border-rdblack py-[5px] pl-[10px] pr-[20px]"
                        >
                          <option value="Anytime">Anytime</option>
                          <option value="Today">Today</option>
                          <option value="Last 3 days">Last 3 days</option>
                          <option value="Last week">Last week</option>
                          <option value="Last 2 weeks">Last 2 weeks</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[80%]">
              <div id="main" className="flex flex-col gap-3">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </div>
              <div id="footer">
                {/* pagination */}
                <div className="mt-5 flex flex-col gap-2.5 rounded-md border border-[#c8c8c8] bg-white px-3 py-2.5 text-[#0f151a]">
                  <div className="flex items-center justify-center gap-5 py-[20px]">
                    <button className="flex w-full max-w-[300px] items-center justify-center gap-1 rounded-[4px] border-2 border-[#081351] px-3 py-1.5 text-center font-medium text-[#081351]">
                      <HiMiniArrowSmallLeft className="text-xl" />
                      <p className="text-sm">Previous</p>
                    </button>
                    <button className="flex w-full max-w-[300px] items-center justify-center gap-1 rounded-[4px] border-2 border-[#081351] px-3 py-1.5 text-center font-medium text-[#081351]">
                      <p className="text-sm">Next</p>
                      <HiMiniArrowSmallRight className="text-xl" />
                    </button>
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