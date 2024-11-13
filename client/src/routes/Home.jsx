import Search from "../components/mainview/search/Search";
import Trending from "../components/mainview/trending/Trending";
import SectorsLocations from "../components/mainview/sectors-locations/SectorsLocations";

function Home() {
  return (
    <>
      <Search />
      <Trending />
      <SectorsLocations />
    </>
  );
}

export default Home