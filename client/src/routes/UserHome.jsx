import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery } from "../features/usersApiSlice";
import { getProfile } from "../features/authSlice";
import InfoPod from "../components/ui-components/InfoPod";
import ModalDropDown from "../components/ui-components/ModalDropDown";
import MobileJobSearch from "../routes/MobileJobSearch";
import CardList from "../components/ui-components/CardList";
import About from "../components/ui-components/logged-in-user/About";
import SavedJobs from "../components/ui-components/logged-in-user/SavedJobs";
import JobSearch from "./JobSearch";

import {
  HiMagnifyingGlass,
} from "react-icons/hi2";
import ProfileComplete from "../components/ui-components/logged-in-user/ProfileComplete";
import AppliedJobs from "../components/ui-components/logged-in-user/AppliedJobs";

export default function UserHome() {
  const dispatch = useDispatch();
  const { profileInfo } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const savedJobs = useSelector((state) => state.auth.profileInfo.profile.savedJobs);
  const appliedJobs = useSelector(
    (state) => state.auth.profileInfo.profile.appliedJobs,
  );

  const { data: profileData, isSuccess, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (isSuccess && profileData && !profileInfo) {
      dispatch(getProfile(profileData.profile));
    }
  }, [isSuccess, profileData, profileInfo, dispatch]);

    if (isLoading || !profileInfo) {
      return <p>Loading profile information...</p>;
    }

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
          <div className="mx-auto max-w-[1280px] md:flex md:gap-6">
            <div id="" className="basis-[35%] lg:basis-[30%] xl:basis-[30%]">
              <div className="flex flex-col gap-3">
                <About />
                <InfoPod title={`Profile`}>
                  <ProfileComplete />
                </InfoPod>
              </div>
            </div>
            <div className="basis-[80%]">
              <div id="main" className="flex flex-col gap-3">
                <CardList
                  title={`Saved Jobs - ${savedJobs && savedJobs?.length}`}
                >
                  <SavedJobs />
                </CardList>
                <CardList
                  title={`Jobs Applied to - ${appliedJobs && appliedJobs?.length}`}
                >
                  <AppliedJobs />
                </CardList>
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
