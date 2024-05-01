import React from "react";
import { AiFillStar } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import { HiOutlineStar } from "react-icons/hi2";

const Star = ({ starsCount }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, indx) => {
    let number = indx + 1;
    return (
      <span key={indx}>
        {starsCount >= indx + 1 ? (
          <AiFillStar />
        ) : starsCount > number ? (
          <TiStarHalfOutline />
        ) : (
          <HiOutlineStar />
        )}
      </span>
    );
  });
  return <div className="flex text-yellow-400 text-2xl">{ratingStar}</div>;
};

export default Star;
