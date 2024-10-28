
export default function InfoPod({title, headerIcon, headerLink, children}) {
  return (
    <div className="flex flex-col gap-2.5 rounded-md border border-[#c8c8c8] bg-white text-[#0f151a] md:w-[100%]">
      <div className="border-b p-4 flex items-center justify-between">
        <p className="text-[20px] font-bold text-rdblack">{title}</p>
        <div className="flex items-center gap-2 font-medium">
          <p className="text-rdlightBlue">{headerLink}</p>
          <div className=" text-rdlightBlue">{headerIcon}</div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}