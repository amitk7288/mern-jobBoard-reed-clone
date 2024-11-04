import { LuUpload } from "react-icons/lu";

export default function CVModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">CV</h2>
      <form className="flex flex-col">
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="first-name">
            Upload CV
          </label>
          <input
            type="file"
            name="upload"
            id="upload"
            placeholder="Upload CV"
          />
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter your first name
          </span>
        </div>
        <button
          type="submit"
          className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885] items-center gap-1.5"
        >
          <LuUpload className="mb-[2px]" />
          <p>Upload</p>
        </button>
      </form>
    </div>
  );
}
