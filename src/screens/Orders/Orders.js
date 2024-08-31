import React, { useEffect, useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import OrderCard from "./OrderCard/OrderCard";

import { ordering } from "./OrderData";

import classes from "./Orders.module.css";

const Orders = (props) => {
  const [isDropOpen, setIsDropOpen] = useState("");

  const limitDropdown = (id) => {
    setIsDropOpen(id);
  };

  const closeLimitDropdown = () => {
    setIsDropOpen("");
  };

  return (
    <section className={classes.Orders}>
      <h2 className={classes.OrderHeader}>
        <span>
          <BiSolidPurchaseTag size={21} />
        </span>
        Purchased-Items
      </h2>
      <OrderCard
        limitDropdown={limitDropdown}
        closeLimitDropdown={closeLimitDropdown}
        isDropOpen={isDropOpen}
        header="General"
        id="General"
        data={ordering}
      />
    </section>
  );
};

export default Orders;
