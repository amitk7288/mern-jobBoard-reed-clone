export default function QualificationsText({ type, school, from, to, subject, grade }) {
  return (
    <div className="border-b pb-4">
      <h4 className="mb-[6px] font-bold">{type}</h4>
      <div className="flex flex-col gap-1">
        <p>{school}</p>
        <p>{from} - {to}</p>
        <ul>
          <li>{subject}: {grade}</li>
        </ul>
      </div>
    </div>
  );
}
