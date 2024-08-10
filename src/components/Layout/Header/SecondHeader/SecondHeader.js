import React from "react";

import Contents from "./Contents/Contents";
import classes from "./SecondHeader.module.css";

const SecondHeader = () => {
  return (
    <div className={classes.SecondHeader}>
      <Contents />
    </div>
  );
};

export default SecondHeader;
