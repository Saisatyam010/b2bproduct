import React from "react";
import SelleHeaderImage from "../../assets/images/sidebarHeader.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className=" border-b border-[#BDBDBD] w-full">
      <div className="w-full py-2 px-4 flex justify-between items-center">
        <div className="aspect-auto">
          <img src={SelleHeaderImage} alt="" className="ml-2" loading="lazy" />
        </div>
        <span className="text-2xl md:hidden block">
          <GiHamburgerMenu />
        </span>
      </div>
    </div>
  );
};

export default Header;
