import productSliceReducer from "./product/productSlice";
import productStoreSlice from "./productStore/productStoreSlice";
import ordersSlice from "./orders/ordersSlice";
import uiSliceReducer from "./ui/uiSlice";
import DetailsAndCartReducer from "./DetailsAndCart/detailAndCartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    product: productSliceReducer,
    ui: uiSliceReducer,
    dc: DetailsAndCartReducer,
    orders: ordersSlice,
    pStore: productStoreSlice
  },
});

export default store;
