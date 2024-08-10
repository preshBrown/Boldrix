import React from "react";
import ReactStars from "react-rating-stars-component";
import RatingCard from "./RatingCard/RatingCard";

import classes from "./RatingStatistics.module.css";

const RatingStatistics = (props) => {
  return (
    <article className={classes.RatingStatistics}>
      <h4>Overall Rating</h4>

      <div>
        <h2>4.5</h2>
        <h5>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            value={4}
            activeColor="rgb(240, 30, 30)"
          />
        </h5>
        <small>0 customer ratings</small>
        <ul className={classes.Stats}>
          <RatingCard count={5} value={5} numberOfCustomers={3} />
          <RatingCard count={4} value={4} numberOfCustomers={166} />
          <RatingCard count={3} value={3} numberOfCustomers={1} />
          <RatingCard count={2} value={2} numberOfCustomers={0} />
          <RatingCard count={1} value={1} numberOfCustomers={0} />
        </ul>
      </div>
    </article>
  );
};

export default RatingStatistics;
