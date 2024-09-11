 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: null,
  loading: true,
  error: false,

  cart: { items: [], quantities: 0, totalPrice: 0 },
  cartLoading: false,
};

const detailAndCarts = createSlice({
  name: "detailAndCarts",
  initialState,
  reducers: {
    detailOpStart(state, actions) {
      state.loading = true;
    },
    detailOpSuccessful(state, actions) {
      state.loading = false;
      state.productDetail = actions.payload;
      state.error = null;
    },

    detailOpFailed(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },
    resetDetailLoading(state, actions) {
      console.log("reset");

      state.loading = false;
      state.productDetail = null;
    },

    startCartOperation(state, actions) {
      state.cartLoading = true;
    },
    failedCartOperation(state, actions) {
      state.cartLoading = false;
      state.error = actions.payload;
    },
    addToCart(state, actions) {
      const newItem = actions.payload;
      const CartExistance = state.cart.items.findIndex(
        (cart) => cart.id === newItem.id
      );

      const updatedCart = [...state.cart.items];
      let totalQuantities;
      let totalPriceSum;

      if (CartExistance >= 0) {
        const foundItem = updatedCart[CartExistance];
        foundItem.quantity = foundItem.quantity + newItem.quantity;
        //  foundItem.price = foundItem.price + newItem.price;
        totalQuantities = state.cart.quantities + newItem.quantity;
        totalPriceSum =
          state.cart.totalPrice + newItem.price * newItem.quantity;
        updatedCart[CartExistance] = foundItem;
      } else {
        updatedCart.push(newItem);
        totalQuantities = state.cart.quantities + newItem.quantity;
        totalPriceSum =
          state.cart.totalPrice + newItem.price * newItem.quantity;
      }

      state.cart.items = updatedCart;
      state.cart.quantities = totalQuantities;
      state.cart.totalPrice = totalPriceSum;
      state.cartLoading = false;
      console.log("🚀 ~ addToCart ~ state.cart.items:", state.cart.items);
    },
    getCart(state, actions) {
      state.cart.items = actions.payload;
      state.cartLoading = false;
    },
    increaseCartItem(state, actions) {
      const CartExistance = state.cart.items.findIndex(
        (cart) => cart.id === actions.payload
      );

      const updatedCart = [...state.cart.items];
      let totalQuantities;
      let totalPriceSum;

      const foundItem = updatedCart[CartExistance];
      foundItem.quantity = foundItem.quantity + 1;
      totalQuantities = state.cart.quantities + 1;
      totalPriceSum = state.cart.totalPrice + foundItem.price;
      updatedCart[CartExistance] = foundItem;

      state.cart.items = updatedCart;
      state.cart.quantities = totalQuantities;
      state.cart.totalPrice = totalPriceSum;
    },

    decreaseCartItem(state, actions) {
      const CartExistance = state.cart.items.findIndex(
        (cart) => cart.id === actions.payload
      );

      const updatedCart = [...state.cart.items];
      let totalQuantities;
      let totalPriceSum;

      const foundItem = updatedCart[CartExistance];
      foundItem.quantity = foundItem.quantity - 1;
      totalQuantities = state.cart.quantities - 1;
      totalPriceSum = state.cart.totalPrice - foundItem.price;
      updatedCart[CartExistance] = foundItem;

      state.cart.items = updatedCart;
      state.cart.quantities = totalQuantities;
      state.cart.totalPrice = totalPriceSum;
    },

    removeCart(state, actions) {
      const existingCartItem = state.cart.items.find(
        (cart) => cart.id === actions.payload
      );
      const filteredCart = state.cart.items.filter(
        (items) => items.id !== actions.payload
      );

      state.cart.quantities = state.cart.quantities - existingCartItem.quantity;
      state.cart.totalPrice = state.cart.totalPrice - existingCartItem.price * existingCartItem.quantity;
      state.cart.items = filteredCart;
      state.cartLoading = false;
    },

    purchasing (state, actions) {
      state.cartLoading = true;
    },

    clearCart (state, actions) {
      state.cart.quantities = 0
      state.cart.totalPrice = 0
      state.cart.items = [];
      state.cartLoading = false;
    }
  },
});

export const detailAndCartsAction = detailAndCarts.actions;
export default detailAndCarts.reducer;
