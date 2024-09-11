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
import { useDispatch, useSelector } from "react-redux";
import {
  bestPickItems,
  hotDealsItems,
  newArrivalsItems,
  recommendedItems,
} from "../Home/HomeData";
import Spinner from "../../components/Interfaces/Spinner/Spinner";
import { initCart } from "../../store/DetailsAndCart/detailAndCartAction";

const Cart = (props) => {
  const [errorModal, setErrorModal] = useState(false);
  const [promt, setPromt] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartProp = useSelector((state) => state.dc.cart);
  const loading = useSelector((state) => state.dc.cartLoading);
  const error = useSelector((state) => state.dc.error);
  const purchasedComplete = useSelector((state) => state.orders.purchased);
  console.log("🚀 ~ Cart ~ purchasedComplete:", purchasedComplete)

  console.log("🚀 ~ Cart ~ cartProp:", cartProp);
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
    console.log("🚀 ~ useEffect ~ newCart:", newCart);

    dispatch(initCart(newCart));
  }, []);

  const onProceedToCheckout = () => {
    navigate("/checkout");
  };

  let cart = (
    <div style={{paddingTop: "150px", paddingBottom: "150px"}}>
      <Spinner />
    </div>
  );

  if (!loading && cartProp.items)
    cart = (
      <>
        <header className={classes.CartHeader}>
          <div className={classes.Subtotal}>
            <h5>Subtotal</h5> <h4>₦ {cartProp.totalPrice}</h4>
          </div>
          <h5>CART ({cartProp.quantities})</h5>
          <small>Delivery fees not included yet.</small>
        </header>

        <section className={classes.CartItem}>
          {cartProp.items.map((items) => (
            <CartCard
              price={items.price}
              descriptionSummary={items.descriptionSummary}
              avalability={items.avalability}
              img={items.image1}
              id={items.id}
              qty={items.quantity}
            />
          ))}
        </section>

        <section className={classes.Checkout}>
          <Button className={classes.BtnCall} to="Tel: 1(009998)">
            <IoMdCall size={26} />
          </Button>{" "}
          <Button clicked={onProceedToCheckout} className={classes.BtnCheckout}>
            CHECKOUT ( ₦ {cartProp.totalPrice} ){" "}
          </Button>
        </section>

        <section className={classes.Refunds}>
          <h4>Returns are easy </h4>
          <small>
            Free return within 7 days for all eligible items details
          </small>
        </section>

        <Category />
      </>
    );
  if (!loading && cartProp.items.length === 0)
    cart = (
      <p  style={{paddingTop: "150px", paddingBottom: "170px",  textAlign: "center"}} >You Have No Items In Your Cart</p>
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
