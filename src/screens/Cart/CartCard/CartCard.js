import React, { useState } from "react";
import Button from "../../../components/Interfaces/Button/Button";
import { AiOutlineDelete } from "react-icons/ai";
import Logo from "./Bespoke-bourbon-cream.jpg";
import { TiMinus, TiPlus } from "react-icons/ti";

import classes from "./CartCard.module.css";

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(5);

  return (
    <article className={classes.CartCard}>
      <div className={classes.CardDescriptionContainer}>
        <div className={classes.CartImgContainer}>
          <img src={Logo} alt="ImgItem" />
        </div>

        <div className={classes.description}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            ratione numquam quia mollitia
          </p>
          <small>
            Variation: <span>ORIGINAL</span>
          </small>
          <h4>$ {props.price}</h4>
          <small>In Stock</small>
        </div>
      </div>

      <div className={classes.toggle}>
        <button className={classes.ButtonRemove}>
          <span>
            <AiOutlineDelete className={classes.Icon} size={26} />
          </span>
          REMOVE
        </button>
        <div className={classes.toggleButtons}>
          <button
            disabled={quantity === 1}
            className={classes.toggleButton}
            onClick={() => setQuantity((prevQ) => prevQ - 1)}
          >
            <TiMinus size={26} />
          </button>
          <span>{quantity}</span>
          <button
            className={classes.toggleButton}
            onClick={() => setQuantity((prevQ) => prevQ + 1)}
          >
            <TiPlus size={26} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
