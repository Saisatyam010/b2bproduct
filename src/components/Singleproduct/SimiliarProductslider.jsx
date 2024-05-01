import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SimiliarProductsliderData } from "../Common/Data";
import "./SimiliarProduct.css";

const SimiliarProductslider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5px",
        },
      },
    ],
  };
  return (
    <div className=" mt-4 py-2">
      <div className="p-5">
        <Slider {...settings}>
          {SimiliarProductsliderData.map((itm, indx) => (
            <div className="flex" key={indx}>
              <div
                className="flex items-end mx-auto p-3 rounded-xl h-[269px] max-w-[299px] w-full cursor-pointer bg-no-repeat bg-center bg-cover relative"
                style={{ backgroundImage: `url(${itm.imgSrc})` }}
              >
                <div className="">
                  <h4 className=" text-white font-semibold text-[20px]">
                    {itm.productName}
                  </h4>
                  <h4 className=" text-white font-semibold text-[20px] flex items-center gap-1">
                    {itm.price}
                    <span className=" text-base font-normal">{itm.piece}</span>
                  </h4>
                </div>

                <span className=" bg-secondary py-2 max-w-[94px] w-full absolute top-5 left-0 text-primary font-bold text-sm rounded-r-[4px]">
                  62% Off sale
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimiliarProductslider;
