import {Outlet, useLocation} from "react-router-dom";
import Search from "./search/Search";
import Trending from "./trending/Trending";
import SectorsLocations from "./sectors-locations/SectorsLocations";

export default function MainView() {
  const location = useLocation();

  return (
    <div className="pt-[50px] lg:pt-[60px]">
      <Outlet />
      {location.pathname === "/" && (
        <>
          <Search />
          <Trending />
          <SectorsLocations />
        </>
      )}
    </div>
  );
}
