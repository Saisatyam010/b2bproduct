import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RegionSliderData } from "../Common/Data";
import "./RegionSlider.css";

function RegionSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-5">
      <Slider {...settings}>
        {RegionSliderData.map((itm, indx) => (
          <div className="flex" key={indx}>
            <div
              className=" flex justify-center items-end p-3 rounded-xl h-[105px] max-w-[170px] w-full cursor-pointer bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${itm.imgsrc})` }}
            >
              <h4 className=" text-white font-semibold text-[20px]">
                {itm.title}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RegionSlider;
