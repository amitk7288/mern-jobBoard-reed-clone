import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { logoutUser } from "../../features/authSlice";
import { useLogoutMutation } from "../../features/usersApiSlice";
import {
  IoHeartOutline,
  IoMenuSharp,
  IoChevronDown,
  IoChevronUp,
  IoPersonOutline,
} from "react-icons/io5";
import logo from "../../assets/reed-logo.webp";
import SideMenu from "../ui-components/SideMenu";
import DropMenu from "../ui-components/logged-in-user/DropMenu";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const [logout] = useLogoutMutation();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout().unwrap();
      dispatch(logoutUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }

  }

  const handleViewProfile = (e) => {
    e.preventDefault();
    navigate("/profile")
  }

  return (
    <div className="fixed z-[1000] w-full border-b bg-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex h-[50px] items-center justify-between border-b-slate-300 px-4 lg:h-[60px]">
          <div className="flex items-center gap-5 xl:gap-10">
            <IoMenuSharp
              className="cursor-pointer text-xl lg:hidden"
              onClick={() => setIsMobMenuOpen(true)}
            />
            <Link to={`/`}>
              <img src={logo} alt="Reed" className="h-[30px] object-contain" />
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
          <div className="flex h-[50px] items-center gap-5 lg:h-[60px] xl:gap-10">
            {userInfo ? (
              <>
                <div className="flex items-center gap-1">
                  <IoHeartOutline className="text-xl" />
                  <a href="#" className="hidden font-medium md:block">
                    Saved jobs
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <DropMenu
                    trigger={
                      <div className="flex cursor-pointer items-center gap-1 p-1">
                        <IoPersonOutline className="text-xl" />
                        <p className="font-medium md:block">{userInfo.email}</p>
                        <IoChevronDown className="text-xl" />
                      </div>
                    }
                    pos={`right-[0px] top-[38px]`}
                  >
                    {(closeMenu) => (
                      <nav className="flex cursor-pointer flex-col items-start">
                        <button
                          onClick={(e) => {
                            handleViewProfile(e);
                            closeMenu();
                          }}
                          className="relative flex w-full items-center gap-x-2 border-b border-gray-200 bg-transparent px-3 py-2 font-medium hover:bg-[#f3f3fe]"
                        >
                          Profile
                        </button>
                        <button
                          onClick={(e) => {
                            handleLogout(e);
                            closeMenu();
                          }}
                          className="relative flex w-full items-center gap-x-2 bg-transparent px-3 py-2 font-medium hover:bg-[#f3f3fe]"
                        >
                          Log out
                        </button>
                      </nav>
                    )}
                  </DropMenu>

                  {/* <DropMenu
                    trigger={
                      <div className="flex cursor-pointer items-center gap-1 p-1">
                        <IoPersonOutline className="text-xl" />
                        <p className="font-medium md:block">
                          {userInfo.email}
                        </p>
                        <IoChevronDown className="text-xl" />
                      </div>
                    }
                    pos={`right-[0px] top-[38px]`}
                  >
                    <nav className="flex cursor-pointer flex-col items-start">
                      <button
                        onClick={handleViewProfile}
                        className="relative flex w-full items-center gap-x-2 border-b border-gray-200 bg-transparent px-3 py-2 font-medium hover:bg-[#f3f3fe]"
                      >
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="relative flex w-full items-center gap-x-2 bg-transparent px-3 py-2 font-medium hover:bg-[#f3f3fe]"
                      >
                        Log out
                      </button>
                    </nav>
                  </DropMenu> */}
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
