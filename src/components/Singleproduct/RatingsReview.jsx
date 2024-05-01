import React, { useState } from "react";
import Tabs from "./Tabs";
import { LeftIcon, RightIcon } from "../Common/Icons";
import { RatingsReviewData, RatingsTabs } from "../Common/Data";

const RatingsReview = () => {
  const [reviewType, setreviewType] = useState("all");
  return (
    <div
      id="reviews"
      className="w-full pt-3 my-2 border-b pb-8 border-[#BCBCBC]"
    >
      <div className="h-[1px] bg-[#BCBCBC] w-full mb-3"></div>
      <h2 className=" font-semibold text-[26px]">Ratings and Reviews </h2>
      <div className="flex gap-8 items-center mt-3 w-full whitespace-nowrap flex-wrap">
        {RatingsTabs.map((itm, indx) => (
          <button
            className={`${
              reviewType === itm.shortName
                ? "underline underline-offset-8 decoration-primary"
                : ""
            } font-semibold text-[20px] `}
            onClick={() => setreviewType(itm.shortName)}
            key={indx}
          >
            {itm.title}
          </button>
        ))}
      </div>
      {reviewType === "all" &&
        RatingsReviewData.map((itm, indx) => <Tabs data={itm} key={indx} />)}
      {/* {reviewType === "withmedia" &&
        RatingsReviewData.filter((item) => item.rating > 4).map((itm, indx) => (
          <Tabs data={itm} key={indx} />
        ))} */}
      {reviewType === "best" &&
        RatingsReviewData.filter((item) => item.rating >= 4).map(
          (itm, indx) => (
            <Tabs data={itm} Array={RatingsReviewData} key={indx} />
          )
        )}
      {reviewType === "worst" &&
        RatingsReviewData.filter((item) => item.rating <= 3).map(
          (itm, indx) => <Tabs data={itm} key={indx} />
        )}
      <div className=" mt-6 flex items-center gap-[18px]">
        <button className="h-[62px] w-[62px] bg-[#EFEFEF] rounded-full border border-[#C2C2C2] flex justify-center items-center">
          <LeftIcon />
        </button>
        <span className=" font-medium text-[28px] text-black">2</span>
        <button className="h-[62px] w-[62px] bg-[#EFEFEF] rounded-full border border-[#C2C2C2] flex justify-center items-center">
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default RatingsReview;
