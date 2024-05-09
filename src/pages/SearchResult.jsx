import React from "react";
import ProductCards from "../components/SearchProducts/ProductCards";
import MainLayout from "../components/Common/MainLayout";

const SearchResult = () => {
  return (
    <MainLayout bgColor>
      <ProductCards />
    </MainLayout>
  );
};

export default SearchResult;
