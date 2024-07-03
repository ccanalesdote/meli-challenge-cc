import { configureStore } from "@reduxjs/toolkit";

import searchSliceReducer from "./states/search";
import categoriesSliceReducer from "./states/categories";
import productsSliceReducer from "./states/products";

import { Product } from "../models";

export interface AppStore {
  search: {
    value: string;
  };
  categories: {
    categories: string[];
  };
  products: {
    products: Product[];
  };
}

export default configureStore<AppStore>({
  reducer: {
    search: searchSliceReducer,
    categories: categoriesSliceReducer,
    products: productsSliceReducer
  }
});