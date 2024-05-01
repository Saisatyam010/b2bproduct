import React from "react";
import SelleHeaderImage from "../../assets/images/sidebarHeader.png";
const Header = () => {
  return (
    <div className=" border-b border-[#BDBDBD] w-full">
      <div className="w-full py-2 px-4">
        <div className="aspect-auto">
          <img src={SelleHeaderImage} alt="" className="ml-2" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
