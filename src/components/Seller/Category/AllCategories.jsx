import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCategory from "./MainCategory";
import ProductCategory from "./ProductCategory";
import SubCategory from "./SubCategory";

const AllCategories = () => {
  const { Category, Subcategory, ProductList } = useSelector(
    (state) => state.category
  );
  const navigate = useNavigate();
  function handleClick() {
    navigate("/seller/product/addproduct");
  }
  return (
    <>
      <div className="border-[3px] border-[#AFAFAF] rounded-lg h-[600px] mt-2 flex scrollbar">
        <MainCategory />
        {Category !== null && <SubCategory />}
        {Subcategory !== null && <ProductCategory />}
      </div>
      <div className="my-6 pb-4 flex justify-end">
        <button
          className="p-4 rounded-full bg-primary disabled:bg-primary/45 disabled:border-none disabled:text-white text-white hover:bg-white hover:text-primary transition-all ease-in duration-200"
          onClick={handleClick}
          disabled={ProductList === null}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </>
  );
};

export default AllCategories;
