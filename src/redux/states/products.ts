import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../models";

export const EmptyProductsState: Products = {
    products: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState: EmptyProductsState,
    reducers: {
        createProducts: (state, action) => action.payload,
        updateProducts: (state, action) => ({ ...state, ...action.payload }),
        resetProducts: () => EmptyProductsState
    }
});

export const { createProducts, updateProducts, resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
