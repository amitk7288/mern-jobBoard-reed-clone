import { IoHeartOutline, IoMenuSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex h-[50px] items-center justify-between border border-b-slate-300 px-4">
      <div className="flex items-center gap-4">
        <IoMenuSharp className="text-xl" />
        <p>logo</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="" className="font-medium">
          Sign in
        </a>
        <IoHeartOutline className="text-xl" />
      </div>
    </div>
  );
}
