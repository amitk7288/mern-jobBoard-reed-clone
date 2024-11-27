import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchJobsByCriteria } from "../features/jobsSlice";

export default function MobileJobSearch({closeModal}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [errorWhat, setErrorWhat] = useState(false);
  const [errorWhere, setErrorWhere] = useState(false);

  const searchData = useSelector((state) => state.jobs.searchData);

  useEffect(() => {
    if (searchData) {
      setWhat(decodeURIComponent(searchData.whatVal) || "");
      setWhere(decodeURIComponent(searchData.whereVal) || "");
    }
  }, [searchData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (what.trim() === "") {
        setErrorWhat(true);
      } else {
        setErrorWhat(false);
      }
      if (where.trim() === "") {
        setErrorWhere(true);
      } else {
        setErrorWhere(false);
      }
      if (what && where) {
        dispatch(searchJobsByCriteria({ what, where }));
        navigate(`/search?keywords=${what}&location=${where}`);
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="pt-[15px] text-lg font-bold lg:text-xl">Search</p>
      <form
        className="flex flex-col gap-1 md:flex-row md:items-center"
        onSubmit={handleSubmit}
      >
        <div className="md:basis-[40%]">
          <label
            htmlFor="job-title"
            className="mb-1 text-lg text-rdblack md:block"
          >
            What
          </label>
          <input
            type="search"
            name="job-title"
            placeholder={`e.g. "account manager"`}
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            className={`w-full rounded-md border border-rdblack px-4 py-2.5 lg:py-3 ${errorWhat ? `border border-red-500` : ``}`}
          />
          <p
            className={`${errorWhat ? `visible` : `invisible`} text-sm text-red-500`}
          >
            Required field
          </p>
        </div>
        <div className="md:basis-[40%]">
          <label
            htmlFor="job-location"
            className="mb-1 text-lg text-rdblack md:block"
          >
            Where
          </label>
          <input
            type="search"
            name="job-location"
            placeholder={`town or postcode"`}
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            className={`w-full rounded-md border border-rdblack px-4 py-2.5 md:block lg:py-3 ${errorWhere ? `border border-red-500` : ``}`}
          />
          <p
            className={`${errorWhere ? `visible` : `invisible`} text-sm text-red-500`}
          >
            Required field
          </p>
        </div>
        <button
          type="submit"
          className="mb-[20px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885] md:mb-[0px] md:mt-2.5 md:flex md:basis-[20%] md:justify-center md:self-center md:px-4 md:py-[13px] lg:py-[13px]"
        >
          Search jobs
        </button>
      </form>
    </div>
  );
}