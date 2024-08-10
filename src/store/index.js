import productSliceReducer from "./product/productSlice";
import uiSliceReducer from "./ui/uiSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    product: productSliceReducer,
    ui: uiSliceReducer
    
  },
});

export default store;
