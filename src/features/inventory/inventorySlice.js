import { createSlice } from "@reduxjs/toolkit";
import { SellerInventoryBodyData } from "../../components/Common/Data";
const initialState = {
  products: SellerInventoryBodyData,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    filterActive: (state, action) => {
      state.products = SellerInventoryBodyData.filter(
        (itm) => itm.status === "Active"
      );
    },
    filterInactive: (state, action) => {
      state.products = SellerInventoryBodyData.filter(
        (itm) => itm.status === "Inactive"
      );
    },
    filterAll: (state, action) => {
      state.products = SellerInventoryBodyData;
    },
  },
});

export const { filterActive, filterInactive, filterAll } =
  inventorySlice.actions;

export default inventorySlice.reducer;
