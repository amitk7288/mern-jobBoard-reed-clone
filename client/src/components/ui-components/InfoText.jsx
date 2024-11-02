export default function InfoText({title, body}) {
  return (
    <div>
      <h4 className="font-bold mb-[8px]">{title}</h4>
      <p>{body}</p>
    </div>
  )
}