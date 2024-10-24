import Search from "./search/Search";
import Trending from "./trending/Trending";
import SectorsLocations from "./sectors-locations/SectorsLocations";

export default function MainView() {
  return (
    <>
      <Search />
      <Trending />
      <SectorsLocations />
    </>
  );
}
