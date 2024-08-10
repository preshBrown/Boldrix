import React from "react";

import classes from "./CommentCard.module.css";


const CommentCard = (props) =>  (
    <li className={classes.CommentCard}>
      <p  className={classes.Card}>
        <span className={classes.tag}>* 4.4</span>ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis
        ratione numquam quia molliLorem ipsum, dolor sit amet consectetur
        adipisicing elit.Reiciendis ratione numquam quia molli Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam
        quia molliLorem ipsum, dolor sit amet consectetur adipisicing
        elit.Reiciendis ratione numquam quia molli
      </p>
      <div className={classes.CommentCardProfile}>
        <div className={classes.CommentCardProfileImg}>
          <img src={props.Img} alt={props.alt} />
        </div>

        <div className={classes.CommentCardProfileDetails}>
          <h5 className={classes.Name}>Raymond</h5>
          <h5 className={classes.Date}>Jun 9, 2024</h5>
        </div>
      </div>
    </li>
  )

export default CommentCard;
