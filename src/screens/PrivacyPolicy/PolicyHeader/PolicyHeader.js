import React from "react";
import Button from "../../../components/Interfaces/Button/Button";

import classes from "./PolicyHeader.module.css";

const PolicyHeader = (props) => {


  return (
    <section className={classes.PolicyHeader}>
      <article className={classes.PolicyHeaderWrapper}>
        <div className={classes.PolicyHeaderContents}>
        <h2>{props.heading}</h2>
        <small>
          {props.intro}
        </small>
        <div className={classes.PolicyHeaderNavigations}>
          <Button clicked={props.getStarted} W-100 className={classes.GetStartedBtn}>Get Started</Button>{" "}
          <Button  Danger className={classes.LernMoreLink} to={props.link}>
            Learn More
          </Button>
        </div>
        </div>
      </article>

      <article className={classes.Png}>
        <div className={classes.PngWrapper}>
          <img src={props.img} alt={props.alt} />
        </div>
      </article>
    </section>
  );
};

export default PolicyHeader;
