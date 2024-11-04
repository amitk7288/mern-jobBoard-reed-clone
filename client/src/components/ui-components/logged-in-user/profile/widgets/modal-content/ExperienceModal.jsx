export default function ExperienceModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Add Work Experience</h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="label-style">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="e.g. Software Developer"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="company" className="label-style">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="e.g. Facebook"
            className="input-style"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="year-start" className="label-style">
              Year start
            </label>
            <input
              type="number"
              id="year-start"
              name="year-start"
              placeholder="e.g. 2022"
              className="input-style"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year-end" className="label-style">
              Year end
            </label>
            <input
              type="number"
              id="year-end"
              name="year-end"
              placeholder="e.g. 2024"
              className="input-style"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-3 flex w-fit self-end rounded-md bg-[#cf04a9] px-8 py-2 text-center font-medium text-white hover:bg-[#9f0885]"
        >
          Add
        </button>
      </form>
    </div>
  );
}
