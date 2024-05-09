import React from "react";
import Sidebar from "./Sidebar";
import SearchProductCard from "./Cards";

const ProductCards = () => {
  return (
    <div className="py-2 my-6 flex w-full">
      <Sidebar />
      <SearchProductCard />
    </div>
  );
};

export default ProductCards;
