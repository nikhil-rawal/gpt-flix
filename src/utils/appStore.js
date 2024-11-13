import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: { userSliceReducer: userSlice },
});

export default appStore;
