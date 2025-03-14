import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLink1, HeaderLink2 } from "../Common/Data";
import AllCategoryModal from "./AllCategory";

const SecondHeader = () => {
  const [showAllcategory, setshowAllcategory] = useState(false);
  function handleCLick(item) {
    if (item.icon) {
      setshowAllcategory(true);
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <>
      <div className="flex justify-between w-full ">
        <div className=" flex gap-6">
          {HeaderLink1.map((itm, indx) => (
            <button
              className="flex items-center gap-2 cursor-pointer text-white font-medium"
              key={indx}
              onClick={() => handleCLick(itm)}
            >
              {itm.icon && <span>{itm.icon}</span>}
              {itm.text}
            </button>
          ))}
        </div>
        <div className=" flex gap-6">
          {HeaderLink2.map((item, indx) => (
            <Link className=" text-white" to={"/"} key={indx}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      {showAllcategory && <AllCategoryModal setOpen={setshowAllcategory} />}
    </>
  );
};

export default SecondHeader;
