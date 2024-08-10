import React from "react";

import classes from "./ContentItem.module.css";

const ContentItem = (props) => {
  return (
    <div className={classes.ContentItem}>
      <button>
        <div>{props.icon}</div>
        <div>{props.name}</div>
      </button>
    </div>
  );
};

export default ContentItem;
