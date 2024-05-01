import React from "react";
import RegionSlider from "./RegionSlider";

const DifferentRegion = () => {
  return (
    <div className=" w-full py-5 my-5">
      <div className=" container mx-auto">
        <h1 className="text-[39px] font-semibold">
          Find suppliers by state or region
        </h1>
        <div className="px-3 py-2 my-4">
          <RegionSlider />
        </div>
      </div>
    </div>
  );
};

export default DifferentRegion;
