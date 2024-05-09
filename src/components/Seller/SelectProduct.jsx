import React from "react";
import MainLayout from "../Common/MainLayout";
import AllCategories from "./Category/AllCategories";
import CategoryHeader from "./Category/CategoryHeader";

const SelectCategory = () => {
  return (
    <MainLayout bgColor>
      <CategoryHeader />
      <AllCategories />
    </MainLayout>
  );
};

export default SelectCategory;
