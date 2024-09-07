import { clearCartOnPurchaseSuccess } from "../DetailsAndCart/detailAndCartAction";
import { ordersAction } from "./ordersSlice";

export const initOrders = () => {
  return (dispatch) => {
    dispatch(ordersAction.ordersOpStart());
    const getAllOrders = async () => {
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
      //     dispatch(ordersAction.opSuccessful(response.data));
      //   } catch (err) {
      //     dispatch(ordersAction.opFailed(err.message));
      //   }
      setTimeout(() => {
        dispatch(ordersAction.getOrders());
      }, 2000)
    };
    getAllOrders();
  };
};

export const resetOnPurchase = () => {
  return (dispatch) => {
    const reset = () => {
      dispatch(ordersAction.resetPurchase());
    };
    reset();
  };
};

export const onPurchase = (data) => {
  return (dispatch) => {
    dispatch(ordersAction.ordersOpStart());
    const purchase = async () => {
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
      //     dispatch(ordersAction.opSuccessful(response.data));
      //   } catch (err) {
      //     dispatch(ordersAction.opFailed(err.message));
      //   }
      setTimeout(() => {
        dispatch(ordersAction.placeOrders(data));
        dispatch(clearCartOnPurchaseSuccess())
      }, 2000);
    };
    purchase();
  };
};

export const onRemoveOrders = (id) => {
  return (dispatch) => {
    dispatch(ordersAction.startCartOperation());

    const removeOredrItems = () => {
      setTimeout(() => {
        dispatch(ordersAction.removeOrders(id));
      }, 1000);
    };
    removeOredrItems();
  };
};


