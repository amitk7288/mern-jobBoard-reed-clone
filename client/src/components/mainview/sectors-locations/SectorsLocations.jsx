import { useState } from "react";
import SecLocGridItem from "./SecLocGridItem";
import secLoc from "../../../data/SecLoc";

export default function SectorsLocations() {
  const [isSector, setIsSector] = useState(true)
  const [isLocation, setIsLocation] = useState(false)

  function handleClickSector(e) {
    e.preventDefault();
    setIsSector(true);
    setIsLocation(false);
  }
  function handleClickLocation(e) {
    e.preventDefault();
    setIsLocation(true);
    setIsSector(false);
  }

  return (
    <div className="py-[50px] px-[23px] md:mx-[15px] md:px-[15px] lg:grid lg:justify-center flex flex-col gap-4">
      <div className="flex justify-center gap-[30px] text-lg">
        <button
          onClick={handleClickSector}
          href="#"
          className={`flex-col justify-end gap-2 p-3 font-medium text-rdlightBlue ${isSector && `text-rdpink after:block after:w-full after:border-b-[5px] after:border-rdpink after:content-['']`} `}
        >
          Sectors
        </button>
        <button
          onClick={handleClickLocation}
          href="#"
          className={`flex-col justify-end gap-2 p-3 font-medium text-rdlightBlue ${isLocation && `text-rdpink after:block after:w-full after:border-b-[5px] after:border-rdpink after:content-['']`} `}
        >
          Locations
        </button>
      </div>
      <div className="lg:grid-rows-0 grid lg:max-w-[1280px] grid-cols-2 grid-rows-auto gap-5 md:gap-10 lg:grid-cols-4">
        {/* Sectors */}
        {isSector && secLoc[0].map((i) => (
          <SecLocGridItem key={i.id} title={i.title} img={i.img} />
        ))}
        {/* Locations */}
        {isLocation && secLoc[1].map((i) => (
          <SecLocGridItem
            key={i.id}
            title={i.title}
            img={i.img}
            link={i.link}
          />
        ))}
      </div>
    </div>
  );
}
