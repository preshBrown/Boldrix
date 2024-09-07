import React from "react";
import Button from "../../../components/Interfaces/Button/Button";
import Logo from "./Bespoke-bourbon-cream.jpg";
import classes from "./DeliveryDetails.module.css";
import { MdTransferWithinAStation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  clearCartOnPurchaseSuccess,
  onPurchasing,
} from "../../../store/DetailsAndCart/detailAndCartAction";
import { useDispatch, useSelector } from "react-redux";
import { onPurchase } from "../../../store/orders/ordersActions";

const DeliveryDetails = (props) => {
  const dispatch = useDispatch();

  const cartProp = useSelector((state) => state.dc.cart);
  const loading = useSelector((state) => state.dc.cartLoading);
  const error = useSelector((state) => state.dc.error);


  const onPurchaseHandler = async () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const seconds = date.getSeconds();
    
    const fullDate = `${day}-${month}-${year}-${hour}:${min}:${seconds}`;
    const orders = {
      id: fullDate,
      date: fullDate,
      totalCost: cartProp.totalPrice,
      items: [...cartProp.items],
    };

    dispatch(onPurchasing());
    dispatch(onPurchase(orders));
   
    
  };


 
  return (
    <>
      <h4 className={classes.CheckoutPaymentMethod}>
        <span className={classes.CheckoutPaymentMethodHeader}>
          DELIVERY DETAILS
        </span>{" "}
        <Button Danger to="#" className={classes.Change}>
          Change
        </Button>
      </h4>

      <article className={classes.DeliveryDetails}>
        <div className={classes.PaymentMethod}>
          <span>
            <MdTransferWithinAStation size={26} />
          </span>
          <div className={classes.PaymentMethodContentWrapper}>
            <h4>Pick-up Station</h4>
            <small>Delivery between {props.deliveryStartDate}  &  {props.deliveryEndDate}.</small>
          </div>
        </div>

        <ul className={classes.DeliveryDetailsItems}>
          {props.items.map((items) => (
            <li className={classes.DeliveryDetailsItem}>
              <h5>
                <span>Shipment 1/2</span>
                <span>Fulfilled by Boldrix</span>
              </h5>

              <article className={classes.DeliveryDetailsCard}>
                <div className={classes.PickUpStation}>
                  <h5> Pick-up Station</h5>
                  <small>Delivery between {props.deliveryStartDate}  &  {props.deliveryEndDate}.</small>
                </div>

                <div className={classes.ItemDescription}>
                  <div className={classes.ItemDescriptionImgWrapper}>
                    <img src={items.image1} alt="ItemImage" />
                  </div>
                  <div>
                    <h4>{items.brandSummary} </h4>
                    <small>QTY:</small> <span>{items.quantity}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <h3 className={classes.ModifyCart}>
          <Button Danger className={classes.ModifyCartBtn} to="/cart">
            {" "}
            MODIFY CART{" "}
          </Button>{" "}
        </h3>
      </article>

      <h4 className={classes.BackHome}>
        <Button Danger to="/">
          <span>
            <IoIosArrowBack className={classes.BackHomeIcon} size={24} />
          </span>
          Go back & continue shopping
        </Button>
      </h4>

      <div className={classes.ConfirmOrder}>
        <button onClick={onPurchaseHandler}>CONFIRM ORDER</button>
      </div>
    </>
  );
};

export default DeliveryDetails;
