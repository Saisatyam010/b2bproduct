import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import inventoryReducer from "../features/inventory/inventorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    inventory: inventoryReducer,
  },
});