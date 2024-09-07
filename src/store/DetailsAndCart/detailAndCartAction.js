import { detailAndCartsAction } from "./detailAndCartSlice";

export const initDetail = (data) => {
  return (dispatch) => {
    dispatch(detailAndCartsAction.detailOpStart());
    const getProducts = async () => {
      //   try {
      //     const response = await new Promise((resolve, reject) => {
      //       const productsData = { data: [...data] };

      //       setTimeout(() => {
      //         resolve(productsData);
      //       }, 2000);
      //     });

      //     //   const products = await response.json();

      //     if (!response) {
      //       throw Error("Somthing went wrong");
      //     }
      //     console.log(response.data)
      //     dispatch(detailAndCartsAction.opSuccessful(response.data));
      //   } catch (err) {
      //     dispatch(detailAndCartsAction.opFailed(err.message));
      //   }
      dispatch(detailAndCartsAction.detailOpSuccessful(data));
    };
    getProducts();
  };
};

export const resetLoading = () => {
  return (dispatch) => {
    const reset = () => {
      dispatch(detailAndCartsAction.resetDetailLoading());
    };
    reset();
  };
};

export const onAddToCart = (data) => {
  return (dispatch) => {
    dispatch(detailAndCartsAction.startCartOperation());
    const addCartItem = async () => {
      //   try {
      //     const response = await new Promise((resolve, reject) => {
      //       const productsData = { data: [...data] };

      //       setTimeout(() => {
      //         resolve(productsData);
      //       }, 2000);
      //     });

      //     //   const products = await response.json();

      //     if (!response) {
      //       throw Error("Somthing went wrong");
      //     }
      //     console.log(response.data)
      //     dispatch(detailAndCartsAction.opSuccessful(response.data));
      //   } catch (err) {
      //     dispatch(detailAndCartsAction.opFailed(err.message));
      //   }
      setTimeout(() => {
        dispatch(detailAndCartsAction.addToCart(data));
      }, 2000);
    };
    addCartItem();
  };
};

export const initCart = (data) => {
  return (dispatch) => {
    dispatch(detailAndCartsAction.startCartOperation());

    const getAllCart = () => {
      setTimeout(() => {
        dispatch(detailAndCartsAction.getCart(data));
      }, 2000);
    };
    getAllCart();
  };
};

export const onIncreaseCartItem = (id) => {
  return (dispatch) => {
    // dispatch(detailAndCartsAction.startCartOperation());

    const increaseCartItem = () => {
      dispatch(detailAndCartsAction.increaseCartItem(id));
    };
    increaseCartItem();
  };
};

export const onDecreaseCartItem = (id) => {
  return (dispatch) => {
    // dispatch(detailAndCartsAction.startCartOperation());

    const decreaseCartItem = () => {
      dispatch(detailAndCartsAction.decreaseCartItem(id));
    };
    decreaseCartItem();
  };
};

export const onRemoveCart = (id) => {
  return (dispatch) => {
    dispatch(detailAndCartsAction.startCartOperation());

    const removeCartItem = () => {
      setTimeout(() => {
        dispatch(detailAndCartsAction.removeCart(id));
      }, 1000);
    };
    removeCartItem();
  };
};

export const onPurchasing = () => {
  return (dispatch) => {

    const purchasing = () => {
      dispatch(detailAndCartsAction.purchasing());
    };
    purchasing();
  };
};

export const clearCartOnPurchaseSuccess = () => {
  return (dispatch) => {

    const clear = () => {
      dispatch(detailAndCartsAction.clearCart());
    };
    clear();
  };
};