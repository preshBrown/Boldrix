import React from "react";

import classes from "./OrderSummary.js.module.css";
import AuthForm from "./AuthForm/AuthForm";

const OrderSummary = (props) => (
  <article className={classes.OrderSummary}>
    <ul className={classes.OrderSummaryItems}>
      <li className={classes.OrderSummaryItem}>
        item's total ({props.itemTotal})
      </li>
      <li className={[classes.OrderSummaryItem, classes.right].join(" ")}>₦ {props.itemPriceTotalSum} </li>
      <li className={classes.OrderSummaryItem}> Delivery fees</li>
      <li className={[classes.OrderSummaryItem, classes.right].join(" ")}>₦ {props.deliveryFee}</li>
      <li className={[classes.OrderSummaryItem, classes.total].join(" ")}>Total </li>
      <li className={[classes.OrderSummaryItem, classes.right, classes.total].join(" ")}>₦ {props.sum}</li>
    </ul>
    <AuthForm />
  </article>
);

export default OrderSummary;
