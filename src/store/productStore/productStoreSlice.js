import { createSlice } from "@reduxjs/toolkit";


// { id: 1, items: [{}, {}], date: "date", totalCost: "$555" },

const initialState = {
  productStore: [],
  loading: true,
  error: false,
};

const productStore = createSlice({
  name: "productStore",
  initialState,
  reducers: {
    productStoreOpStart(state, actions) {
      state.loading = true;
    },

    getproductStore(state, actions) {
      state.productStore = actions.payload;
      state.loading = false;
    },

    productStoreOpFailed(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },

  },
});

export const productStoreAction = productStore.actions;
export default productStore.reducer;
