export default function ExperienceText({ role, company, from, to }) {
  return (
    <div className="border-b pb-4">
      <h4 className="mb-[6px] font-bold">{role}</h4>
      <div className="flex flex-col gap-1">
        <p>{company}</p>
        <p>{from}  - {to}</p>
      </div>
    </div>
  );
}
