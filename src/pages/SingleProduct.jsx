import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { ShareIcon } from "../components/Common/Icons";
import Faq from "../components/Singleproduct/Faq";
import KeyAttributes from "../components/Singleproduct/KeyAttributes";
import KnowSupplier from "../components/Singleproduct/KnowSupplier";
import PricingCard from "../components/Singleproduct/PricingCard";
import Productslider from "../components/Singleproduct/Productslider";
import QueryButton from "../components/Singleproduct/QueryButton";
import RatingsReview from "../components/Singleproduct/RatingsReview";
import SimiliarProduct from "../components/Singleproduct/SimiliarProduct";
import Star from "../components/Singleproduct/Star";
import TermCondition from "../components/Singleproduct/TermCondition";

const SingleProduct = () => {
  const largeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="w-full py-2 my-5">
      <div className=" container mx-auto w-full">
        <div className="flex items-start justify-between">
          <div className="lg:max-w-[50%] w-full">
            <h1 className="text-[30px] font-semibold">
              Wholesale Custom Logo Plus Size Plain Blank Men's Hoodies &
              Sweatshirts Men's hoodies
            </h1>
            <div className="mt-4 ml-2 flex justify-between w-full items-center flex-wrap">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full"></div>
                  <h5 className="text-lg font-medium">25 Orders</h5>
                </div>
                <span>
                  <ShareIcon />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a href="#reviews" className=" text-lg font-medium">
                  9 reviews
                </a>
                <Star />
              </div>
            </div>
            <Productslider />
            {!largeScreen && <PricingCard screenSize={largeScreen} />}
            <KeyAttributes />
            <RatingsReview />
            <KnowSupplier />
            <Faq />
            <TermCondition />
          </div>
          {largeScreen && <PricingCard screenSize={largeScreen} />}
        </div>
        <SimiliarProduct />
      </div>
      <QueryButton />
    </div>
  );
};

export default SingleProduct;
