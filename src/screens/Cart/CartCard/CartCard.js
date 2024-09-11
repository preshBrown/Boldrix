import React, { useState } from "react";
import Button from "../../../components/Interfaces/Button/Button";
import { AiOutlineDelete } from "react-icons/ai";
import Logo from "./Bespoke-bourbon-cream.jpg";
import { TiMinus, TiPlus } from "react-icons/ti";

import classes from "./CartCard.module.css";
import { useDispatch } from "react-redux";
import {
  onIncreaseCartItem,
  onDecreaseCartItem,
  onRemoveCart,
} from "../../../store/DetailsAndCart/detailAndCartAction";

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(5);
  const dispatch = useDispatch();

  const increaseItemQty = (id) => {
    dispatch(onIncreaseCartItem(id));
  };

  const decreaseItemQty = (id) => {
    dispatch(onDecreaseCartItem(id));
  };

  const removeCart = (id) => {
    dispatch(onRemoveCart(id));
  };

  return (
    <article className={classes.CartCard}>
      <div className={classes.CardDescriptionContainer}>
        <div className={classes.CartImgContainer}>
          <img src={props.img} alt="ImgItem" />
        </div>

        <div className={classes.description}>
          <p>{props.descriptionSummary}</p>
          <small>
            Variation: <span>ORIGINAL</span>
          </small>
          <h4>₦ {props.price}</h4>
          <small>{props.avalability}</small>
        </div>
      </div>

      <div className={classes.toggle}>
        <button
          onClick={removeCart.bind(null, props.id)}
          className={classes.ButtonRemove}
        >
          <span>
            <AiOutlineDelete className={classes.Icon} size={26} />
          </span>
          REMOVE
        </button>
        <div className={classes.toggleButtons}>
          <button
            disabled={props.qty === 1}
            className={classes.toggleButton}
            onClick={decreaseItemQty.bind(null, props.id)}
          >
            <TiMinus size={26} />
          </button>
          <span>{props.qty}</span>
          <button
            className={classes.toggleButton}
            onClick={increaseItemQty.bind(null, props.id)}
          >
            <TiPlus size={26} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
