import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { ProductSliderData } from "../Common/Data";
import { IoHeartOutline } from "react-icons/io5";
import "./Productslider.css";
const Productslider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className=" bg-[#F1F1F1] px-10 mt-10 w-full">
        <Slider
          asNavFor={nav2}
          autoplay
          className="relative px-2"
          arrows={true}
          ref={(slider) => (sliderRef1 = slider)}
        >
          {ProductSliderData.map((itm, indx) => (
            <div className=" max-w-[635px] w-full" key={indx}>
              <img src={itm.imgSrc} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
          <div className="absolute top-0 left-0">
            <span>
              <IoHeartOutline />
            </span>
          </div>
        </Slider>
      </div>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={6}
        arrows={false}
        swipeToSlide={true}
        infinite={true}
        focusOnSelect={true}
        {...settings}
      >
        {ProductSliderData.map((itm, indx) => (
          <div
            className=" max-w-[96px] w-full pt-3 px-2 border-[#CFCFCF] border my-5 cursor-pointer"
            key={indx}
          >
            <img src={itm.imgSrc} className="w-full h-auto" loading="lazy" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Productslider;
