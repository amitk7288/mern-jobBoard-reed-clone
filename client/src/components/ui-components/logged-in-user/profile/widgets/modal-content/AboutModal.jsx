import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function AboutModal() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">About you</h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="first-name">
            First Name*
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First name"
            className="input-style"
          />
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter your first name
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="role">
            Role*
          </label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            className="input-style"
          />
          <span className="hidden text-sm font-medium text-[#e32424]">
            Please enter your prefered role
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="tel">
            Contact number
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Contact number"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label-style" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input-style"
          />
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
