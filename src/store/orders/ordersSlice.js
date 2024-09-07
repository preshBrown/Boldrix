import { createSlice } from "@reduxjs/toolkit";


// { id: 1, items: [{}, {}], date: "date", totalCost: "$555" },

const initialState = {
  orders: [],
  purchased: false,
  loading: true,
  error: false,
};

const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    ordersOpStart(state, actions) {
      state.loading = true;
    },

    getOrders(state, actions) {
      // state.orders = actions.payload;
      state.loading = false;
    },

    ordersOpFailed(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },

    placeOrders(state, actions) {
      const initialOrders = [...state.orders]
      initialOrders.push(actions.payload)
      state.orders = initialOrders
      state.purchased = true
    },
    resetPurchase(state, actions) {
      state.purchased = false
    },

    removeOrders(state, actions) {

      const filteredOrders = state.orders.filter(
        (items) => items.id !== actions.payload
      );

      state.orders = filteredOrders;
      state.loading = false;
    },
  },
});

export const ordersAction = orders.actions;
export default orders.reducer;
