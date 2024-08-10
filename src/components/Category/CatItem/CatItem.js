import React from "react";
import classes from "./CatItem.module.css";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const CatItem = (props) => (
  <Link to={props.path} className={classes.CatItem} style={{ translate: props.translate }}>
    <div className={classes.CatImgWrapper}>
      <img className={classes.CatImg} src={props.Img} alt={props.alt} />
    </div>
    <h5>
      {props.name}{" "}
      <span style={{verticalAlign: "middle"}}>
        <MdArrowRightAlt color="red" size={24} />
      </span>
    </h5>
  </Link>
);

export default CatItem;
