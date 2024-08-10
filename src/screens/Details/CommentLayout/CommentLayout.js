import React from "react";
import { FaChevronRight } from "react-icons/fa6";

import classes from "./CommentLayout.module.css";
import { NavLink } from "react-router-dom";
import RatingStatistics from "./RatingStatistics/RatingStatistics";

const CommentLayout = (props) => {
  return (
    <>
      <div
        className={`${classes.ProductInfo} ${props.open ? classes.Open : ""}`}
      >
        <header className={classes.ProductInfoHeader}>
          <h4>{props.header}</h4>{" "}
          <FaChevronRight
            className={classes.Icon}
            onClick={props.toggleComments.bind(this)}
            size={23}
          />
        </header>
        {props.open && (
          <div className={classes.ProductInfoDescription}>
            <RatingStatistics />

            <nav className={classes.CommentNav}>
              <NavLink
                to="comments"
                className={(navData) =>
                  navData.isActive ? classes.CommentActive : ""
                }
              >
                Comments
              </NavLink>{" "}
              <NavLink
                to="user-comment"
                className={(navData) =>
                  navData.isActive ? classes.CommentActive : ""
                }
              >
                You
              </NavLink>
            </nav>

            <div style={{ paddingTop: "15px" }}>{props.children}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentLayout;
