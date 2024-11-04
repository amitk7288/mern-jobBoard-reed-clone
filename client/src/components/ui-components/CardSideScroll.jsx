import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSideScroll({children}) {

  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
}
