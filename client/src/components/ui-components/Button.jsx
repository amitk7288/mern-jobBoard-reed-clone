
export default function Button({children}) {
  return (
    <button className="flex w-full items-center justify-center gap-1 rounded-[4px] border-2 border-[#081351] bg-white px-3 py-1.5 text-center font-medium text-[#081351] hover:bg-rdblack hover:text-white">
      {children}
    </button>
  );
}