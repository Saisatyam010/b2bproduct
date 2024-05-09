import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellerCategoryData } from "../../../constants/Category";
import { updateCategory } from "../../../features/category/categorySlice";

const MainCategory = () => {
  const dispatch = useDispatch();
  const { Category } = useSelector(
    (state) => state.category
  );
  return (
    <div className="max-w-[350px] w-full h-full overflow-auto">
      {SellerCategoryData.map((itm, indx) => (
        <h3
          className={`w-full p-4 font-medium text-lg cursor-pointer ${
            Category === itm.name
              ? "bg-[#E3E3E3] text-primary"
              : "bg-white text-black"
          }`}
          key={indx}
          onClick={() => dispatch(updateCategory(itm.name))}
        >
          {itm.name}
        </h3>
      ))}
    </div>
  );
};

export default MainCategory;
