
export default function AboutModal() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="first-name" className="label-style">First Name*</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Email address"
            className="input-style"
          />
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter your first name
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="first-name">First Name*</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Email address"
            className="input-style"
          />
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter your first name
          </span>
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter a password
          </span>
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#cf04a9] px-8 py-[15px] text-center font-medium text-white hover:bg-[#9f0885]"
        >
          Create account
        </button>
      </form>
    </div>
  );
}