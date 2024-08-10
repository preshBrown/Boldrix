import React from "react";

import classes from "./CoreList.module.css";
import { Link } from "react-router-dom";
import { coreList } from "../Data/Data";

const CoreListItem = (props) => {
  return (
    <li className={classes.CoreListItem}>
      <Link to={props.to}>{props.name}</Link>
    </li>
  );
};

const CoreList = (props) => {
  return (
    <ul className={classes.CoreList}>
      {coreList.map((data) => (
        <CoreListItem key={data.name} to={data.to} name={data.name} />
      ))}
    </ul>
  );
};

export default CoreList;
