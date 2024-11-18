import { LuTrash } from "react-icons/lu";

export default function ExperienceText({ expRole, company, from, to, onRemove}) {
  return (
    <div className="border-b pb-4 flex items-start justify-between">
      <div>
        <h4 className="mb-[6px] font-bold">{expRole}</h4>
        <div className="flex flex-col gap-1">
          <p>{company}</p>
          <p>
            {from} - {to}
          </p>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        <LuTrash />
      </button>
    </div>
  );
}
