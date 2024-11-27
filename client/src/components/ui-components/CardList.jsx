
export default function CardList({title, children}) {
  return (
    <div className="flex flex-col rounded-md border border-[#c8c8c8] bg-white text-[#0f151a] py-4 px-5">
      <p className="font-bold text-rdblack md:text-[20px] mb-3">{title}</p>
      <div>{children}</div>
    </div>
  );
}