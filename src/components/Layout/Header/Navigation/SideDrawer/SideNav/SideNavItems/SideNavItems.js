import React from "react";

import { MdLocalShipping } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavItem from "./SideNavItem/SideNavItem";
import classes from "./SideNavItems.module.css"

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem   to="/"><FaHome /> Home</NavItem>
      <NavItem   to="/about"><FaCircleInfo /> About</NavItem>
      <NavItem   to="/contact"><MdContactPhone /> Contact</NavItem>
      <NavItem   to="#"><MdLocalShipping /> Ship to United States</NavItem>
      <NavItem   to="#"><MdLocalShipping /> State California</NavItem>
    </ul>
  );
};

export default NavItems;
