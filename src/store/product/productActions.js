import { productActions } from "./productSlice";

export const initBestPicks = (data) => {
  return (dispatch) => {
    dispatch(productActions.bestPicksStartOp());
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
    //     dispatch(productActions.opSuccessful(response.data));
    //   } catch (err) {
    //     dispatch(productActions.opFailed(err.message));
    //   }
    dispatch(productActions.bestPicksOpSuccessful());
    };
    getProducts();
  };
};



export const initRecommended = (data) => {
  return (dispatch) => {
    dispatch(productActions.recommendedStartOp());
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
    //     dispatch(productActions.opSuccessful(response.data));
    //   } catch (err) {
    //     dispatch(productActions.opFailed(err.message));
    //   }
    dispatch(productActions.recommendedOpSuccessful());
    };
    getProducts();
  };
};


export const initHotDeals = (data) => {
  return (dispatch) => {
    dispatch(productActions.hotDealsStartOp());
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
    //     dispatch(productActions.opSuccessful(response.data));
    //   } catch (err) {
    //     dispatch(productActions.opFailed(err.message));
    //   }
    dispatch(productActions.hotDealsOpSuccessful());
    };
    getProducts();
  };
};

export const initnewArrivals = (data) => {
  return (dispatch) => {
    dispatch(productActions.newArrivalsStartOp());
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
    //     dispatch(productActions.opSuccessful(response.data));
    //   } catch (err) {
    //     dispatch(productActions.opFailed(err.message));
    //   }
    dispatch(productActions.newArrivalsOpSuccessful());
    };
    getProducts();
  };
};


