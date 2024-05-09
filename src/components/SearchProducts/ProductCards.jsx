import React from "react";
import Sidebar from "./Sidebar";
import SearchProductCard from "./Cards";

const ProductCards = () => {
  return (
    <div className="container mx-auto py-8 my-6 flex w-full">
      <Sidebar />
      <SearchProductCard />
    </div>
  );
};

export default ProductCards;
