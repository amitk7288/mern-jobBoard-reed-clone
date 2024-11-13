import {Outlet, useLocation} from "react-router-dom";
import Home from "../../routes/Home";
import UserHome from "../../routes/UserHome";
import { useSelector } from "react-redux";

export default function MainView() {
  const location = useLocation();

  const {userInfo} = useSelector((state) => state.auth);

  return (
    <div className="pt-[50px] lg:pt-[60px]">
      <Outlet />
      {location.pathname === "/" && (
        <>
          {userInfo !== null ? <UserHome /> : <Home />}
        </>
      )}
    </div>
  );
}
