import React from "react";
import FIrstHeader from "./FirstHeader/FIrstHeader";
import SecondHeader from "./SecondHeader/SecondHeader";
import classes from "./Header.module.css"

const Header = (props) => {

  return( 
  <header className={classes.Header}>
    <FIrstHeader toggle={props.toggle} />
    {/* <SecondHeader /> */}
  </header>)
};

export default Header;
