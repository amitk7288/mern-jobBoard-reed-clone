import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { searchJobsByCriteria } from "../../../features/jobsSlice";

export default function SecLocGridItem({img, title}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchJobsByCriteria({ what: title, where: "" }));
    navigate(`/search?keywords=${title}&location=`);
  };

  return (
    <div className="flex cursor-pointer flex-col gap-2" onClick={handleClick}>
      <img
        src={img}
        alt={title}
        className="aspect-square h-[110px] rounded-md object-cover s:aspect-auto md:h-[280px] lg:h-[180px]"
      />
      <a className="cursor-pointer font-medium text-rdlightBlue md:text-lg">
        {title}
      </a>
    </div>
  );
}