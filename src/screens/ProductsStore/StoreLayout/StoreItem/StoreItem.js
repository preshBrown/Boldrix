import React from "react";
import ReactStars from "react-rating-stars-component";

import classes from "./StoreItem.module.css";
import { Link } from "react-router-dom";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";

const StoreItem = (props) => {
  return (
    <li className={`${classes.ProductList}  ${classes[props.Modes]}`}>
      <Link className={`${classes.StoreItemLink} ${classes.Switch} `} to={`/products/${props.id}`}>
        <div className={classes.ProductListImgWrapper}>
          <div className={classes.ProductListImgContainer}>
            <img
              className={`${classes.ProductListImg} ${classes.Default}`}
              src={props.image1}
              alt="Default"
            />
            <img
              className={`${classes.ProductListImg} ${classes.ImageTwo}`}
              src={props.image2}
              alt="Alternative"
            />
          </div>
        </div>

        <div className={classes.ProductListInfo}>
          <h5>{props.brand}</h5>
          <h5>
            {props.descriptionSummary}
          </h5>
          <ReactStars
            count={5}
            edit={false}
            isHalf={true}
            size={24}
            value={props.rating}
            activeColor="#ffd700"
          />
          <h5>$ {props.price}</h5>
        </div>
      </Link>

      <Link className={classes.Wishlist} to="#">
        <CiHeart size={20} />
      </Link>

      <div className={classes.ProductListItems}>
        <Link to="#" className={classes.Compare}>
          <CiShuffle size={20} />
        </Link>
        <Link to="#" className={classes.View}>
          <IoEyeOutline size={20} />
        </Link>
        <Link to="#" className={classes.Cart}>
          <PiShoppingCartSimple size={20} />
        </Link>
      </div>
    </li>
  );
};

export default StoreItem;
