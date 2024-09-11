import React from "react";
import ReactStars from "react-rating-stars-component";

import defaultImg from "./Bespoke-bourbon-cream.jpg";
import imgTwo from "./water.jpg";
import classes from "./ProductList.module.css";
import { Link } from "react-router-dom";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";

const ProductList = (props) => {
  return (
    <li className={classes.ProductList}>
      <Link to={`/products/${props.id}`}>
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
            <Link className={classes.Wishlist} to="#">
              <CiHeart size={20} />
            </Link>

            <div className={classes.ProductListContents}>
              <h4>{props.category}</h4>
              <ReactStars
                count={5}
                edit={false}
                size={24}
                value={props.rating}
                isHalf={true}
                activeColor="#ffd700"
              />
              <h5>{props.rating}</h5>
            </div>

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
          </div>
        </div>

        <div className={classes.ProductListInfo}>
          <h5>{props.name}</h5>
          <h4>₦ {+props.price}</h4>
          <Link to={`/products/${props.id}`}>Read More</Link>
        </div>
      </Link>
    </li>
  );
};

export default ProductList;
