export default function StatusModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Status and availability</h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="employment-status">
            Employment Status*
          </label>
          <select
            name="employment-status"
            id="employment-status"
            className="input-style"
            required
          >
            <option value="" disabled>
              Select employment status
            </option>
            <option value="employed">Employed (full-time)</option>
            <option value="part-time">Employed (part-time)</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="notice-period">
            Notice Period*
          </label>
          <input
            type="text"
            name="notice-period"
            id="notice-period"
            placeholder="e.g. 2 weeks"
            className="input-style"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="work-eligibility-checkbox">
            Work Eligibility*
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="work-eligibility"
              id="work-eligibility-checkbox"
              className="mr-2"
              required
            />
            <span>I am eligible to work in the UK</span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
        >
          Save
        </button>
      </form>
    </div>
  );
}
