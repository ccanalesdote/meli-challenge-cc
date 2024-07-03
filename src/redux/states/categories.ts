import { createSlice } from "@reduxjs/toolkit";

export const EmptyCategoriesState = {
    categories: [''],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: EmptyCategoriesState,
    reducers: {
        createCategories: (state, action) => action.payload,
        updateCategories: (state, action) => ({ ...state, ...action.payload }),
        resetCategories: () => EmptyCategoriesState
    }
});

export const { createCategories, updateCategories, resetCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
