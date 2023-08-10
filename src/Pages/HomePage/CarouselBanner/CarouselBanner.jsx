import { imageBanner } from "../../../assets/img_banner/img_banner_sgv";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import SearchCarousel from "./SearchCarousel";

const img = [];
imageBanner.forEach((element) => img.push(element.url));

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % img.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = img.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <div ref={slideRef} className="w-full select-none relative">
        <div className="aspect-w-16 aspect-h-9">
          <SearchCarousel />
          <img src={img[currentIndex]} alt="" />

          <div className="absolute bottom-5 right-36 text-white text-lg ">
            <p>
              {imageBanner[currentIndex].name},{" "}
              <span className="font-bold">{imageBanner[currentIndex].job}</span>
            </p>
          </div>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
      </div>

      {/*  */}
      <div className="bg-[#FAFAFA] py-5">
        <div className=" mx-72 flex justify-around items-center">
          <span className="text-[#b5b6ba] text-xl">Trusted by:</span>
          <span>
            <img
              className="w-auto"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
              alt="facebook"
            />
          </span>
          <span>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt="Google"
            />
          </span>
          <span>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt="NETFLIX"
            />
          </span>
          <span>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
              alt="P&G"
            />
          </span>
          <span>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt="PayPal"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
