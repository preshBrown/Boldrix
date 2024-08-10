import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <span className={classes["loader"]}></span>
    </div>
  );
};

export default Spinner;
