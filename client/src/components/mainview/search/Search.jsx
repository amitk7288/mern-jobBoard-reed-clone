import { IoChevronForward } from "react-icons/io5";

export default function Search() {
  return (
    <div>
      <div>image</div>
      <div className="bg-[#081351] p-4">
        <form className="flex flex-col gap-5">
          <input
            type="search"
            placeholder={`e.g. "account manager"`}
            className="w-full rounded-md border px-4 py-2.5"
          />
          <button
            type="submit"
            className="mb-[20px] rounded-md bg-[#cf04a9] px-3 py-2 font-medium text-white hover:bg-[#9f0885]"
          >
            Search 151, 262 jobs
          </button>
        </form>
        <a
          href="#"
          className="flex items-center justify-end gap-1 font-medium text-white"
        >
          <p className="hover:underline">Browse jobs</p>
          <IoChevronForward />
        </a>
      </div>
    </div>
  );
}
