export default function SecLocGridItem({img, title, link}) {
  return (
    <div className="flex flex-col gap-2">
      <img src={img} alt={title} className="rounded-md object-cover aspect-square s:aspect-auto h-[110px] md:h-[280px] lg:h-[180px]" />
      <a href={link} className="text-rdlightBlue font-medium md:text-lg">{title}</a>
    </div>
  )
}