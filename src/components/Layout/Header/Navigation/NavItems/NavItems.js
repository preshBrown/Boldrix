import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css"
import AuthModal from "../../../../Interfaces/AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { openAuthUi,closeAuthUi } from "../../../../../store/ui/uiActions";



const NavItems = (props) => {

  const dispatch = useDispatch()
  const authDropdown = useSelector(state => state.ui.authDropdown)

// useEffect(() => {
//   console.log("Rendered");
  
// }, [authNav])

const openADropdown = () => {
 dispatch(openAuthUi())
};

const closeADropdown = () => {
  dispatch(closeAuthUi())
 };
  return (
    <ul className={classes.NavItems}>
      <NavItem   to="/"><FaHome /></NavItem>

      <button className={classes.NavButton} onClick={openADropdown}>
      <AuthModal show={authDropdown} close={()=> ""}/>
        <FaUser  />
      </button>
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
