import React from "react";

import classes from "./PaymentMethods.module.css";
import { paymentMethods as paymentTypes } from "../Data/Data";

const PaymentMethodsItem = (props) => {
  return <button className={classes.PaymentMethodsItem}>{props.iconName}</button>;
};

const PaymentMethods = (props) => {
  return (
    <div className={classes.PaymentMethods}>
      {paymentTypes.map((data) => (
        <PaymentMethodsItem key={data.name} iconName={data.icon} />
      ))}
    </div>
  );
};

export default PaymentMethods;