import React from "react";
import SidebarItem from "./SidebarItem";
import DynamicSidebarData from "./DynamicSidebarData.json";

import classes from "./DynamicSidebar.module.css";

const DynamicSidebar = () => {
  return (
    <div className={classes.DemoSidebar}>
      {DynamicSidebarData.map((item, index) => (
        <SidebarItem key={index} item={item}/>
      ))}
    </div>
  );
};

export default DynamicSidebar;
