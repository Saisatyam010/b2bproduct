import React from "react";
import ExploreCard from "./ExploreCard";
import { exploredata } from "../Common/Data";

const Explore = () => {
  return (
    <div
      className=" mb-12 px-6 py-16 bg-no-repeat bg-center bg-cover w-full mx-auto"
      style={{ backgroundImage: "url(/images/explorebg.png" }}
    >
      <h2 className="text-white text-center text-[39px] font-semibold lg:w-1/2 w-full mx-auto">
        Explore millions of offerings tailored to your business needs
      </h2>
      <div className="flex text-white flex-wrap md:justify-between justify-center lg:flex-nowrap  w-[87%] mx-auto mt-12 ">
        {exploredata.map((item, index) => (
          <ExploreCard
            borderE={`${exploredata.length - 1 === index ? 'false' : 'true'}`}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
