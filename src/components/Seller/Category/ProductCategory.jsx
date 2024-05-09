import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellerProductData } from "../../../constants/Category";
import { updateProductlist } from "../../../features/category/categorySlice";

const ProductCategory = () => {
  const {  Subcategory } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-full overflow-auto">
      {SellerProductData.map((itm, indx) => (
        <h3
          className={`w-full p-4 font-medium text-lg cursor-pointer ${
            Subcategory === itm.name
              ? "bg-[#E3E3E3] text-primary"
              : "bg-white text-black"
          }`}
          key={indx}
          onClick={() => dispatch(updateProductlist(itm.name))}
        >
          {itm.name}
        </h3>
      ))}
    </div>
  );
};

export default ProductCategory;
