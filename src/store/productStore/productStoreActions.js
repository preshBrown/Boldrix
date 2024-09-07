import { clearCartOnPurchaseSuccess } from "../DetailsAndCart/detailAndCartAction";
import { productStoreAction } from "./productStoreSlice";

export const initProductStore = (data) => {
  return (dispatch) => {
    dispatch(productStoreAction.productStoreOpStart());
    const getAllProducts = async () => {
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
      //     dispatch(productStoreAction.opSuccessful(response.data));
      //   } catch (err) {
      //     dispatch(productStoreAction.opFailed(err.message));
      //   }

      setTimeout(() => {
        dispatch(productStoreAction.getproductStore(data));
      }, 2000)
    };
    getAllProducts();
  };
};