import { configureStore } from "@reduxjs/toolkit";

import searchSliceReducer from "./states/search";

export interface AppStore {
  search: {
    value: string;
  };
}

export default configureStore<AppStore>({
  reducer: {
    search: searchSliceReducer,
  }
});