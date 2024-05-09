import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellerSubcategoryData } from "../../../constants/Category";
import { updateSubcategory } from "../../../features/category/categorySlice";

const SubCategory = () => {
  const { Subcategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div className="max-w-[350px] w-full h-full overflow-auto border-r-[3px] border-[#AFAFAF]">
      {SellerSubcategoryData.map((itm, indx) => (
        <h3
          className={`w-full p-4 font-medium text-lg cursor-pointer ${
            Subcategory === itm.name
              ? "bg-[#E3E3E3] text-primary"
              : "bg-white text-black"
          }`}
          key={indx}
          onClick={() => dispatch(updateSubcategory(itm.name))}
        >
          {itm.name}
        </h3>
      ))}
    </div>
  );
};

export default SubCategory;
