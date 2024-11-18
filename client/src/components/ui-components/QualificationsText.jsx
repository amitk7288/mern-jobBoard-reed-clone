import { LuTrash } from "react-icons/lu";

export default function QualificationsText({
  name,
  school,
  yearStart,
  yearEnd,
  subject,
  grade,
  onRemove,
}) {
  return (
    <div className="flex items-start justify-between border-b pb-4">
      <div className="">
        <h4 className="mb-[6px] font-bold">{name}</h4>
        <div className="flex flex-col gap-1">
          <p>{school}</p>
          <p>
            {yearStart} - {yearEnd}
          </p>
          <ul>
            <li>
              {subject}: <span className="font-semibold">{grade}</span>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        <LuTrash />
      </button>
    </div>
  );
}
