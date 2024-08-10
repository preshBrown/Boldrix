import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestPicksProducts: null,
  bestPicksLoading: true,
  bestPicksError: false,
  recommendedProducts: null,
  recommendedLoading: true,
  recommendedError: false,
  hotDealsProducts: null,
  hotDealsLoading: true,
  hotDealsError: false,
  newArrivalsProducts: null,
  newArrivalsLoading: true,
  newArrivalsError: false,
};

const productSlice = createSlice({
  name: "prodCollections",
  initialState,
  reducers: {
    bestPicksStartOp(state, actions) {
      state.bestPicksLoading = true;
    },
    bestPicksOpSuccessful(state, actions) {
      state.bestPicksLoading = false;
      // state.products = actions.payload
      state.bestPicksError = null;
    },

    bestPicksOpFailed(state, actions) {
      state.bestPicksLoading = false;
      state.bestPicksError = actions.payload;
    },


    recommendedStartOp(state, actions) {
      state.recommendedLoading = true;
    },
    recommendedOpSuccessful(state, actions) {
      state.recommendedLoading = false;
      // state.products = actions.payload
      state.recommendedError = null;
    },

    recommendedOpFailed(state, actions) {
      state.recommendedLoading = false;
      state.recommendedError = actions.payload;
    },


    hotDealsStartOp(state, actions) {
      state.hotDealsLoading = true;
    },
    hotDealsOpSuccessful(state, actions) {
      state.hotDealsLoading = false;
      // state.products = actions.payload
      state.hotDealsError = null;
    },

    hotDealsOpFailed(state, actions) {
      state.hotDealsLoading = false;
      state.hotDealsError = actions.payload;
    },


    newArrivalsStartOp(state, actions) {
      state.newArrivalsLoading = true;
    },
    newArrivalsOpSuccessful(state, actions) {
      state.newArrivalsLoading = false;
      // state.products = actions.payload
      state.newArrivalsError = null;
    },

    newArrivalsOpFailed(state, actions) {
      state.newArrivalsLoading = false;
      state.newArrivalsError = actions.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
