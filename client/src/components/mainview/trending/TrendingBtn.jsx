import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchJobsByCriteria } from "../../../features/jobsSlice";

export default function TrendingBtn({title, sector}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchJobsByCriteria({ what: sector, where: 'london' }));
    navigate(`/search?keywords=${sector}&location=london`);
  }

  return (
    <button
      onClick={handleClick}
      className="w-fit rounded-[4px] border-2 border-[#081351] px-3 py-2 text-center font-bold text-[#081351] md:font-medium"
    >
      {title}
    </button>
  );
}