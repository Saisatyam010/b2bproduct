import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CategorySliderData } from "../Common/Data";

function CategorySlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container py-5">
      <Slider {...settings}>
        {CategorySliderData.map((itm, indx) => (
          <div
            className=" flex flex-col max-w-[165px] w-full cursor-pointer outline-none"
            key={indx}
          >
            <img
              src={itm.imgSrc}
              alt={itm.title}
              loading="lazy"
              className=" h-auto rounded-full w-full outline-none shadow-xl"
            />
            <h3 className=" font-light text-xl text-center mt-4">
              {itm.title}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
