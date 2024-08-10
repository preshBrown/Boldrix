import React from "react";
import ReactStars from "react-rating-stars-component";

import classes from "./RatingCard.module.css";

const RatingCard = (props) => (
    <li className={classes.RatingCard}>
      <ReactStars
        count={props.count}
        edit={false}
        size={24}
        value={props.value}
        activeColor="#ffd700"
      />

      <div className={classes.RatingPercent}>
        <div className={classes.gauge}></div>
      </div>
      <span>{props.numberOfCustomers}</span>
    </li>
);

export default RatingCard;
