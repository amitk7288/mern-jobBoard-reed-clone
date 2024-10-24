import Search from "./search/Search";
import JobCard from "../JobCard";
import Trending from "./trending/Trending";

export default function MainView() {
  return (
    <>
      <Search />
      <Trending />
      <JobCard />
    </>
  );
}
