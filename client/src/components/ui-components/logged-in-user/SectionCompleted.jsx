export default function SectionCompleted({ highlight }) {
  return (
    <div
      className={`h-[4px] w-full rounded-lg ${
        highlight ? "bg-rdpink" : "bg-gray-400"
      }`}
    ></div>
  );
}
