import React from "react";
import { useSelector } from "react-redux";
import Generalinfo from "./Generalinfo";
import ImageUpload from "./ImageUpload";

const ProductTabs = () => {
  const { Category, Subcategory, ProductList } = useSelector(
    (state) => state.category
  );
  return (
    <>
      <div className="flex md:justify-between justify-center items-center flex-wrap shrink lg:ml-10 ml-0 lg:mt-0 mt-8 gap-y-4">
        <div className="w-[450px] flex whitespace-nowrap md:mx-0 mx-auto">
          <div className="w-1/2 border-b-2 border-primary cursor-pointer">
            <h3 className=" font-medium text-center text-primary text-lg">
              Main Information
            </h3>
          </div>
          <div className="w-1/2 border-b-2 border-gray cursor-pointer">
            <h3 className=" font-medium text-center text-gray text-lg">
              Specification
            </h3>
          </div>
        </div>
        <div>
          <h4 className="text-darkgray text-lg">
            {Category} &gt; <span>{Subcategory} &gt;</span> {ProductList}
          </h4>
        </div>
      </div>
      <div className="flex gap-6 mt-8 h-full py-3 w-full flex-wrap lg:flex-nowrap items-start shrink-0">
        <Generalinfo />
        <ImageUpload />
      </div>
    </>
  );
};

export default ProductTabs;
