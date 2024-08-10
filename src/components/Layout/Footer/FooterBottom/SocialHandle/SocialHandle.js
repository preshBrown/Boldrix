import React from "react";

import { socialHandleLinks } from "../Data/Data";
import classes from "./SocialHandle.module.css";

const SocialHandleList = (props) => {
  return <li className={classes.SocialHandleList}>{props.icon}</li>;
};

const SocialHandle = () => {
  return (
      <ul className={classes.SocialHandle}>
        {socialHandleLinks.map((data) => (
          <SocialHandleList key={data.name} icon={data.icon} />
        ))}
      </ul>
  );
};

export default SocialHandle;
