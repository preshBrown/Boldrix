import React, { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import Button from "../../components/Interfaces/Button/Button";
import OrderSummary from "./OrderSummary/OrderSummary";
import classes from "./Checkout.module.css";
import { RiSecurePaymentLine } from "react-icons/ri";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  bestPickItems,
  hotDealsItems,
  newArrivalsItems,
  recommendedItems,
} from "../Home/HomeData";
import { initCart } from "../../store/DetailsAndCart/detailAndCartAction";
import Spinner from "../../components/Interfaces/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const Checkout = (props) => {
  const dispatch = useDispatch();

  const cartProp = useSelector((state) => state.dc.cart);
  const loading = useSelector((state) => state.dc.cartLoading);
  const error = useSelector((state) => state.dc.error);
  const purchasedComplete = useSelector((state) => state.orders.purchased);
  const [deliveryStartDate, setDeliveryStartDate] = useState("");
  const [deliveryEndDate, setDeliveryEndDate] = useState("");

  useEffect(() => {
    const allProducts = [
      ...bestPickItems,
      ...recommendedItems,
      ...hotDealsItems,
      ...newArrivalsItems,
    ];
    const initialCart = [...cartProp.items];
    const newCart = [];
    for (let prod of allProducts) {
      const fountProduct = initialCart.find(
        (product) => product.id === prod.id.toString()
      );
      if (fountProduct) {
        newCart.push({
          ...prod,
          ...fountProduct,
        });
      }
    }

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    const orderDate = new Date(`${year}-${month}-${day}`);

    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    const deliveryStartDate = addDays(orderDate, 4);
    const deliveryEndDate = addDays(orderDate, 9);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedStartDate = deliveryStartDate.toLocaleDateString(
      "en-GB",
      options
    );
    const formattedEndDate = deliveryEndDate.toLocaleDateString(
      "en-GB",
      options
    );

    setDeliveryStartDate(formattedStartDate);
    setDeliveryEndDate(formattedEndDate);
    dispatch(initCart(newCart));
  }, []);

  let checkout = (
    <div style={{ paddingTop: "150px", paddingBottom: "150px" }}>
      <Spinner />
    </div>
  );

  if (!loading && cartProp.items) {
    checkout = (
      <>
        <section className={classes.CheckoutHead}>
          <h1>
            <span>
              <BsCartCheckFill />
            </span>
            Place Your Order
          </h1>

          <div className={classes.CheckoutAcknowledged}>
            <h5>
              By proceeding, you are automatically accepting the{" "}
              <Button
                Danger
                className={classes.terms}
                to="/terms-and-conditions"
              >
                Terms & Conditions
              </Button>
            </h5>
          </div>

          <h4 className={classes.CheckoutSummaryHeader}>ORDER SUMMARY</h4>

          <OrderSummary
            itemTotal={cartProp.quantities}
            itemPriceTotalSum={cartProp.totalPrice}
            deliveryFee="5000"
            sum={cartProp.totalPrice + 5000}
          />
        </section>

        <section style={{ marginBottom: "35px" }}>
          <div>
            <article>
              <h4 className={classes.CheckoutPaymentMethod}>
                <span className={classes.CheckoutPaymentMethodHeader}>
                  PAYMENT METHOD
                </span>{" "}
                <Button Danger to="#" className={classes.Change}>
                  Change
                </Button>
              </h4>
              <div className={classes.PaymentMethod}>
                <span>
                  <RiSecurePaymentLine size={26} />
                </span>
                <div className={classes.PaymentMethodContentWrapper}>
                  <h4>Pay with Cards, Bank Transfer or USSD</h4>
                  <small>
                    You will be redirected to our secure checkout page.
                  </small>
                </div>
              </div>

              <h4 className={classes.CheckoutPaymentMethod}>
                <span className={classes.CheckoutPaymentMethodHeader}>
                  CUSTOMER ADDRESS
                </span>{" "}
                <Button Danger to="#" className={classes.Change}>
                  Change
                </Button>
              </h4>
              <div className={classes.PaymentMethod}>
                <div className={classes.PaymentMethodContentWrapper}>
                  <h4>Victor Ike</h4>
                  <small>Well done super market, elimgbu, RUMUKURUSI PH</small>
                </div>
              </div>
            </article>

            <DeliveryDetails
              deliveryStartDate={deliveryStartDate}
              deliveryEndDate={deliveryEndDate}
              purchasedComplete={purchasedComplete}
              items={cartProp.items}
            />
          </div>
        </section>
      </>
    );
  }
  let navigate;
  if (cartProp.items.length === 0 && !purchasedComplete)
    navigate = <Navigate to="/" />;
  if (cartProp.items.length === 0 && purchasedComplete)
    navigate = <Navigate to="/orders" />;

  return (
    <>
      {navigate}
      {checkout}
    </>
  );
};

export default Checkout;
