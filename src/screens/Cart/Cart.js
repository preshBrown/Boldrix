import React, { useEffect, useState } from "react";
import ErrorModal from "../../components/Interfaces/ErrorModal/ErrorModal";
import Modal from "../../components/Interfaces/Modal/Modal";
import Button from "../../components/Interfaces/Button/Button";
import { TiShoppingCart } from "react-icons/ti";
import CartCard from "./CartCard/CartCard";
import Category from "../../components/Category/Category";

import classes from "./Cart.module.css";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
  const [errorModal, setErrorModal] = useState(false);
  const [promt, setPromt] = useState(false);
  const navigate = useNavigate()
  
  useEffect(() => {
    // setErrorModal(true)
    setPromt(true);
  }, []);


  const onProceedToCheckout = () => {

    navigate("/checkout")
  }
  const cart = (
    <>
      <header className={classes.CartHeader}>
        <div className={classes.Subtotal}>
          <h5>Subtotal</h5> <h4>$ 135,000</h4>
        </div>
        <h5>CART (4)</h5>
        <small>Delivery fees not included yet.</small>
      </header>
      <section className={classes.CartItem}>
        <CartCard price="500" />
        <CartCard price="500" />
      </section>
      <section className={classes.Checkout}>
        <Button className={classes.BtnCall} to="Tel: 1(009998)"><IoMdCall size={26} /></Button>{" "}
        <Button clicked={onProceedToCheckout} className={classes.BtnCheckout}>
          CHECKOUT (4$ 1,557,900){" "}
        </Button>
      </section>

      <section className={classes.Refunds}>
        <h4>Returns are easy </h4>
        <small >Free return within 7 days for all eligible items details</small>
      </section>

      <Category />
    </>
  );

  return (
    <section className={classes.Cart}>
      <div className={classes.CartHead}>
        <h2>
          <span className={classes.Icon}>
            <TiShoppingCart size={30} />
          </span>
          CART SUMMARY
        </h2>
      </div>
      {cart}
    </section>
  );
};

export default Cart;
