export default function LookingForModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Looking For</h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="job-title">
            Desired Job Title
          </label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            placeholder="Job title"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="salary">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            placeholder="e.g. £40,000 per annum"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="job-type">
            Job Type
          </label>
          <select name="job-type" id="job-type" className="input-style">
            <option value="" disabled>
              Select job type
            </option>
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          </select>
        </div>

        <button
          type="submit"
          className="py-2 text-center mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 font-medium text-white hover:bg-[#9f0885]"
        >
          Save
        </button>
      </form>
    </div>
  );
}