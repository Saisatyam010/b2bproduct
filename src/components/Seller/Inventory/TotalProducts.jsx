import React from "react";
import { useSelector } from "react-redux";

const TotalProducts = () => {
  const { products } = useSelector((state) => state.inventory);

  return (
    <div className="container mx-auto py-5 flex justify-between items-center">
      <h3 className=" font-medium">Total Products: {products.length}</h3>
      <button className="max-w-[180px] w-full bg-primary py-2 rounded-[4px] text-white font-semibold whitespace-nowrap border border-primary hover:bg-white hover:text-primary transition-all ease-in duration-200">
        Select Products
      </button>
    </div>
  );
};

export default TotalProducts;
