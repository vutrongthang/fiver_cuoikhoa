// Carousel.js
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { imgService } from "../../../assets/img_service/img_service";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const refSlide = useRef();

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
  };
  const next = () => {
    refSlide.current.slickNext();
  };
  const previous = () => {
    refSlide.current.slickPrev();
  };

  return (
    <div className="w-full px-20 relative">
      <h1 className="font-bold text-3xl mt-5">Popular professional services</h1>
      <div className="absolute w-full top-1/2  -translate-y-1/2 flex justify-between items-center  z-30">
        <button
          className="bg-black text-white p-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition ml-1"
          onClick={previous}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="bg-black text-white p-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition mr-40"
          onClick={next}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <Slider ref={refSlide} {...sliderSettings}>
        {imgService?.map((item, index) => (
          <div key={index} className="p-5 relative">
            <div className="absolute top-7 left-8 text-white">
              <p>{item.desc}</p>
              <span className="font-bold text-xl">{item.title}</span>
            </div>
            <img alt="" src={item.url} className="w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
