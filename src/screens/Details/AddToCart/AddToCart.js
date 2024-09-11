import React, { useState } from "react";
import { PiGlobeStand } from "react-icons/pi";
import classes from "./AddToCart.module.css";
import { MdOutlineSell } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart } from "../../../store/DetailsAndCart/detailAndCartAction";

const AddToCart = (props) => {
  const { id, price } = props;
  const [quantity, setQuantity] = useState(5);


  const dispatch = useDispatch();
  const loading = useSelector((state) => state.dc.cartLoading);
  const error = useSelector((state) => state.dc.error);

  const addToCartHandler = () => {
    const item = { id, quantity, price };
    dispatch(onAddToCart(item));
  };

  return (
    <div className={classes.AddToCart}>
      <header className={classes.header}>
        <h2>
          <span>
            <PiGlobeStand style={{ verticalAlign: "middle" }} size={30} />
            {""}
            BEST PICK
          </span>{" "}
          - SAVE 33%
        </h2>
      </header>

      <article className={classes.AddToCartInfo}>
        <div className={classes.price}>
          <h2>
          ₦ {props.price} <span className={classes.stroke}>₦ {props.initialPrice}</span>
          </h2>
          <small>Price is per bottle</small>
        </div>

        <div className={classes.toggle}>
          <small>Bottle</small>
          <div className={classes.toggleButtons}>
            <button
              disabled={quantity === 1}
              className={classes.toggleButton}
              onClick={() => setQuantity((prevQ) => prevQ - 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className={classes.toggleButton}
              onClick={() => setQuantity((prevQ) => prevQ + 1)}
            >
              +
            </button>
          </div>
          <button
          disabled={loading}
            onClick={addToCartHandler.bind(null)}
            className={classes.AddToCartButton}
          >
            {loading ? "Loading..." : "Add to cart"}
          </button>
        </div>
      </article>

      <div className={classes.AddToCartFooter}>
        <h5>
          <span style={{ verticalAlign: "middle" }} className={classes.Icons}>
            <CiDeliveryTruck size={26} />{" "}
          </span>{" "}
          <span>Estimated between {props.deliveryStartDate} and {props.deliveryEndDate}</span>
        </h5>
        <h5>
          <span style={{ verticalAlign: "middle" }} className={classes.Icons}>
            <MdOutlineSell size={26} />{" "}
          </span>{" "}
          <span>Sold by World of Wine, Ltd</span>
        </h5>
      </div>
    </div>
  );
};

export default AddToCart;
