import React, { useState } from "react";
import { PiWifiXBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import classes from "./SidebarItem.module.css";

const SidebarItem = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);

  const toggleItem = () => {
    setOpen(!open);
  };

  if (item.childrens)
    return (
      <div
        className={`${classes["sidebar-item"]}  ${open ? classes.open : ""}`}
      >
        <div className={classes["sidebar-title"]}>
          <span>
            {item.icon && <PiWifiXBold className={classes["i"]} />}
            {item.title}
          </span>
          <FaChevronDown
            className={classes["toggle-btn"]}
            onClick={toggleItem.bind()}
          />
        </div>
        <div className={classes["sidebar-content"]}>
          {item.childrens.map((child, index) => (<SidebarItem key={index} item={child} />))}
        </div>
      </div>
    );

  return (
    <Link to={item.path || "#"} className={`${classes["sidebar-item"]}  ${classes.plain }`}>
        {item.icon && <PiWifiXBold className={classes["i"]} />}
        {item.title}
    </Link>
  );
};

export default SidebarItem;
