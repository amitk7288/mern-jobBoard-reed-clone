export default function CardSideScroll({children}) {

  return (
    <div className="flex flex-col gap-2 h-auto max-h-[450px] overflow-y-auto">
      {children}
    </div>
  );
}
