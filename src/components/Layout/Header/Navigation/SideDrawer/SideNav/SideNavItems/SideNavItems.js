import React from "react";

import { FaQuestion } from "react-icons/fa";
import { MdContactPhone, MdPrivacyTip } from "react-icons/md";
import { FaCircleInfo, FaRegHandshake } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavItem from "./SideNavItem/SideNavItem";
import classes from "./SideNavItems.module.css"
import { RiStore3Fill } from "react-icons/ri";

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem   to="/"><span className={classes.NavIcon}><FaHome /> </span> Home</NavItem>
      <NavItem   to="/about"><span className={classes.NavIcon}><FaCircleInfo /> </span> About</NavItem>
      <NavItem   to="/contact"><span className={classes.NavIcon}><MdContactPhone /> </span> Contact</NavItem>
      <NavItem   to="/faq"><span className={classes.NavIcon}><FaQuestion /> </span> FAQ</NavItem>
      <NavItem   to="/products"><span className={classes.NavIcon}><RiStore3Fill /> </span> Store</NavItem>
      <NavItem   to="/privacy-policy"><span className={classes.NavIcon}><MdPrivacyTip /> </span>Privacy Policy</NavItem>
      <NavItem   to="/terms-and-conditions"><span className={classes.NavIcon}><FaRegHandshake /> </span> Terms & Conditions</NavItem>
    </ul>
  );
};

export default NavItems;
