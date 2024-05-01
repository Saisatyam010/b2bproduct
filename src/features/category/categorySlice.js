import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Category: null,
  Subcategory: null,
  ProductList: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.Category = action.payload;
      state.Subcategory = null;
      state.ProductList = null;
    },
    updateSubcategory: (state, action) => {
      state.Subcategory = action.payload;
      state.ProductList = null;
    },
    updateProductlist: (state, action) => {
      state.ProductList = action.payload;
    },
  },
});

export const { updateCategory, updateSubcategory, updateProductlist } =
  categorySlice.actions;

export default categorySlice.reducer;
