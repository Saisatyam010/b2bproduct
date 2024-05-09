import React, { useEffect, useRef } from "react";
import {
  CategoryModalMainCategory,
  CategoryModalSubCategory,
  Categoryfeatures,
} from "../Common/Data";

const AllCategoryModal = ({ setOpen }) => {
  const modalRef = useRef(null);

  //Click outside inner div modal should be closed
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
        document.body.style.overflow = "auto";
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div className="h-full w-full fixed top-0 left-0 flex justify-center items-center bg-primary/25 px-5 sm:px-4 overflow-auto z-50">
      <div
        className="rounded-md relative w-full top-[130px]"
        ref={modalRef}
      >
        <div className="bg-white w-full">
          {CategoryModalMainCategory.map((itm, indx) => (
            <button
              className="p-4 text-primary focus:bg-[#EBE9EB] focus:font-semibold"
              key={indx}
            >
              {itm}
            </button>
          ))}
        </div>
        <div className="w-full bg-[#EBE9EB] pt-3 pb-6 px-[3em]">
          <div className="flex justify-between w-full">
            <div className="max-w-[80%] w-full flex flex-wrap gap-12">
              {CategoryModalSubCategory.map((itm, indx) => (
                <div className="flex flex-col gap-1 mt-3 w-[30%]" key={indx}>
                  <h4 className="font-semibold text-lg mb-2">
                    {itm.mainCategory}
                  </h4>
                  {itm.subCategory.map((itm, indx) => (
                    <span className=" text-[#555555] font-medium" key={indx}>
                      {itm}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-l-[4px] border-[#CBCBCB] px-8 flex flex-col gap-10">
              {Categoryfeatures.map((itm, indx) => (
                <div className="flex flex-col gap-1 mt-3" key={indx}>
                  <h4 className=" font-semibold text-lg mb-2">
                    {itm.featureName}
                  </h4>
                  {itm.items.map((itm, indx) => (
                    <span
                      className=" text-[#7E7E7E] font-medium underline"
                      key={indx}
                    >
                      {itm.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoryModal;
