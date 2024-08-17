import React from "react";

import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css"

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem   to="/"><FaHome /></NavItem>

      <NavItem to="/login">
        <FaUser  />
      </NavItem>
      <NavItem to="/products">
        <CiSearch  size={20} />
      </NavItem>
      <NavItem  style={{position: "relative"}} to="/cart">
        <TiShoppingCart  size={20}/> <span className={classes.TotalCart}>0</span>
      </NavItem>
    </ul>
  );
};

export default NavItems;
