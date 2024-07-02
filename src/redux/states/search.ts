import { createSlice } from "@reduxjs/toolkit";

export const EmptySearchState = {
    value: ""
};

export const searchSlice = createSlice({
    name: "search",
    initialState: EmptySearchState,
    reducers: {
        createSearch: (state, action) => action.payload,
        updateSearch: (state, action) => ({...state, ...action.payload}),
        resetSearch: () => EmptySearchState
    }
});

export const { createSearch, updateSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
