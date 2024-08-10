import React, { useState } from "react";
import { PiGlobeStand } from "react-icons/pi";
import classes from "./AddToCart.module.css"
import { MdOutlineSell } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(5);

  return (
    <div className={classes.AddToCart}>
      <header className={classes.header} >
        <h2>
          <span>
            <PiGlobeStand style={{verticalAlign: "middle"}} size={30} />{""}
          
          BEST PICK</span> - SAVE 33%
        </h2>
      </header>

      <article className={classes.AddToCartInfo}>
        <div className={classes.price}>
          <h2>{props.price} <span className={classes.stroke}>$45</span></h2>
          <small>Price is per bottle</small>
        </div>

        <div className={classes.toggle}>
          <small>Bottle</small>
          <div  className={classes.toggleButtons}>
            <button disabled={quantity === 1} className={classes.toggleButton} onClick={() => setQuantity((prevQ) => prevQ - 1)}>-</button>
            <span>{quantity}</span>
            <button  className={classes.toggleButton} onClick={() => setQuantity((prevQ) => prevQ + 1)}>+</button>
          </div>
          <button  className={classes.AddToCartButton}>Add to cart</button>
        </div>
      </article>

      <div className={classes.AddToCartFooter}>
        <h5>
          <span style={{verticalAlign: "middle"}} className={classes.Icons}><CiDeliveryTruck size={26} /> </span>{" "}
          <span>Estimated between next Month, Wed, Sep 07 and Thu, Sep 09</span>
        </h5>
        <h5>
          <span style={{verticalAlign: "middle"}} className={classes.Icons}><MdOutlineSell size={26} /> </span> <span>Sold by World of Wine, Ltd</span>
        </h5>
      </div>
    </div>
  );
};

export default AddToCart;
