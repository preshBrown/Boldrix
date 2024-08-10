import React from "react";
import classes from "./ProdItem.module.css";
import { Link } from "react-router-dom";

const ProdItem = (props) => (
  <Link to={`/products/${props.id}`} className={classes.ProdItem} style={{ translate: props.translate }}>
    <div className={classes.ProdImgWrapper}>
      <img className={classes.ProdImg} src={props.Img} alt={props.alt} />
    </div>
    <h5>
      {props.brand}{" "}|{" "}{props.category}{" "}|{" "}{props.size}
    </h5>
  </Link>
);

export default ProdItem;
