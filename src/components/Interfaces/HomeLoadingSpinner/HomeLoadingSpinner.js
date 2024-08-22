import React from "react";

import HomeBackdrop from "./HomeBackdrop";
import classes from "./HomeLoadingSpinner.module.css";

const HomeLoadingSpinner = () => {
  return (
    <>
      <HomeBackdrop show />
      <div className={classes.HomeLoadingSpinner}>
        <div className={classes.Loader}></div> 
      </div>
    </>
  );
};

export default HomeLoadingSpinner;
