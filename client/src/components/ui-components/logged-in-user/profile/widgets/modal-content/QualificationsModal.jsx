export default function QualificationsModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Add Qualification</h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="label-style">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. BA Hons Degree"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="school" className="label-style">
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="e.g. University of Birmingham"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="grade" className="label-style">
            Subject and Grade
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            placeholder="e.g. Computer Science 2:1"
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
