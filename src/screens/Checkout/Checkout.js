import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import Button from "../../components/Interfaces/Button/Button";
import OrderSummary from "./OrderSummary/OrderSummary";
import classes from "./Checkout.module.css";
import { RiSecurePaymentLine } from "react-icons/ri";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";

const Checkout = (props) => {



  return (
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
            <Button Danger className={classes.terms} to="/terms-and-conditions">Terms & Conditions</Button>
          </h5>
        </div>

        <h4 className={classes.CheckoutSummaryHeader}>ORDER SUMMARY</h4>

        <OrderSummary
          itemTotal={4}
          itemTotalSum="600,000"
          deliveryFee="2,000"
          sum="602,000"
        />
      </section>

      <section style={{marginBottom: "35px"}}>
        <div>
          <article>
            <h4 className={classes.CheckoutPaymentMethod}>
              <span className={classes.CheckoutPaymentMethodHeader}>PAYMENT METHOD</span>{" "}
              <Button Danger to="#" className={classes.Change}>
                Change
              </Button>
            </h4>
            <div className={classes.PaymentMethod}>
              <span ><RiSecurePaymentLine size={26} /></span>
              <div className={classes.PaymentMethodContentWrapper}>
                <h4>Pay with Cards, Bank Transfer or USSD</h4>
                <small>You will be redirected to our secure checkout page.</small>
              </div>
            </div>


            <h4 className={classes.CheckoutPaymentMethod}>
              <span className={classes.CheckoutPaymentMethodHeader}>CUSTOMER ADDRESS</span>{" "}
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

          <DeliveryDetails />
        </div>
      </section>
    </>
  );
};

export default Checkout;
