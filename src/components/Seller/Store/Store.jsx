import React, { useState } from "react";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import SideStore from "./SideStore";

function Store() {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const switchToDesktopView = () => {
    setIsDesktopView(true);
  };

  const switchToMobileView = () => {
    setIsDesktopView(false);
  };

  return (
    <div className="grid grid-cols-12 gap-8 mx-auto container">
      <div className="col-span-8 mx-auto">
        <div className="py-8">
          <div className="flex justify-center items-center gap-2 text-black font-bold">
            <div className="flex gap-2 bg-[#EBEBEB] rounded-full text-">
              <button
                className="flex items-center gap-3 focus:bg-[#D1C2D5] rounded-l-full px-7 py-3  "
                onClick={switchToDesktopView}
              >
                <FaDesktop className="w-5 h-5" /> <span>Desktop</span>
              </button>
              <button
                className="flex items-center gap-3 focus:bg-[#D1C2D5] rounded-r-full px-7 py-3   "
                onClick={switchToMobileView}
              >
                <FaMobileAlt className="w-5 h-5" /> <span>Mobile</span>
              </button>
            </div>
          </div>
          {isDesktopView ? <DesktopView /> : <MobileView />}
        </div>
      </div>
      <div className="col-span-4 ">
        <SideStore />
      </div>
    </div>
  );
}

export default Store;
