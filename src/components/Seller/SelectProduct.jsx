import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCategory,
  updateProductlist,
  updateSubcategory,
} from "../../features/category/categorySlice";
import {
  SellerCategoryData,
  SellerProductData,
  SellerSubcategoryData,
} from "../Common/Data";
import { useNavigate } from "react-router-dom";

const SelectProduct = () => {
  const { Category, Subcategory, ProductList } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/seller/addproduct");
  }
  return (
    <div className=" container mx-auto w-full py-2">
      <h1 className="font-semibold text-3xl my-5">
        Select the types of products you want to sell
      </h1>
      <div className="py-2 mt-9">
        <h3 className="text-lg">
          {" "}
          <span className="text-[#6C6C6C] font-semibold">
            Product Classifier :{" "}
          </span>
          <span className="">{Category !== null ? Category + " >" : ""} </span>
          <span className="text-primary">{Subcategory} </span>
        </h3>
      </div>
      <div className="border-[3px] border-[#AFAFAF] rounded-lg h-[600px] mt-2 flex scrollbar">
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
        {Category !== null && (
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
        )}
        {Subcategory !== null && (
          <div className=" w-full h-full overflow-auto ">
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
        )}
      </div>
      <div className="my-6 flex justify-end">
        <button
          className="p-4 rounded-full bg-primary disabled:bg-primary/45 disabled:border-none disabled:text-white text-white hover:bg-white hover:text-primary transition-all ease-in duration-200"
          onClick={handleClick}
          disabled={ProductList === null}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SelectProduct;
