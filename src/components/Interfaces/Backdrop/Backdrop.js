import React from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  // return ReactDOM.createPortal( props.show && <div className={classes.Backdrop} onClick={props.clicked}></div>, document.getElementById("backdrop-hook"))
  return (
    props.show && (
      <div className={classes.Backdrop} onClick={props.clicked}></div>
    )
  );
};

export default Backdrop;
