import productSliceReducer from "./product/productSlice";
import productStoreSlice from "./productStore/productStoreSlice";
import ordersSlice from "./orders/ordersSlice";
import uiSliceReducer from "./ui/uiSlice";
import DetailsAndCartReducer from "./DetailsAndCart/detailAndCartSlice";
import signupSlice from "./Auth/signupSlice";
import loginSlice from "./Auth/loginSlice";
import userSlice from "./user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    product: productSliceReducer,
    ui: uiSliceReducer,
    dc: DetailsAndCartReducer,
    orders: ordersSlice,
    pStore: productStoreSlice,
    signUp: signupSlice,
    logIn: loginSlice,
    user: userSlice
  },
});

export default store;
