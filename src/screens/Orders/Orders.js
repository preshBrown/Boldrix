import React, { useEffect, useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import OrderCard from "./OrderCard/OrderCard";

// import { orders } from "./OrderData";

import classes from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { initOrders, resetOnPurchase } from "../../store/orders/ordersActions";
import Spinner from "../../components/Interfaces/Spinner/Spinner";

const Orders = (props) => {
  const [isDropOpen, setIsDropOpen] = useState("");


  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);
  const loading = useSelector((state) => state.orders.loading);
  // const error = useSelector((state) => state.dc.error);

  useEffect(() => {
    dispatch(initOrders())
return () => dispatch(resetOnPurchase())
  }, [dispatch]);

  const limitDropdown = (id) => {
    setIsDropOpen(id);
  };

  const closeLimitDropdown = () => {
    setIsDropOpen("");
  };


  let orderList = (
    <div style={{ paddingTop: "150px", paddingBottom: "150px" }}>
      <Spinner />
    </div>
  );

  if (!loading && orders) {
    orderList = orders.map((orders) => (
      <OrderCard
      key={orders.id}
        limitDropdown={limitDropdown}
        closeLimitDropdown={closeLimitDropdown}
        isDropOpen={isDropOpen}
        id={orders.id}
        header={orders.date}
        cost={orders.totalCost}
        data={orders.items}
      />
    ))
  }

  if (!loading && orders.length === 0)  orderList = <p style={{paddingTop: "150px", paddingBottom: "150px",  textAlign: "center"}}>You Have No Orders</p>

  return (
    <section className={classes.Orders}>
      <h2 className={classes.OrderHeader}>
        <span>
          <BiSolidPurchaseTag size={21} />
        </span>
        Purchased-Items
      </h2>
      {orderList}
    </section>
  );
};

export default Orders;
