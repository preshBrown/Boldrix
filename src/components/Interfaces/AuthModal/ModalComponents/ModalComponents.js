import React from "react";
import Button from "../../Button/Button";
import classes from "./ModalComponents.module.css";
import { NavLink } from "react-router-dom";

const ModalComponents = (props) => (
  <ul className={classes.ModalComponents}>
    <li className={classes.authBtn}>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="/login"
      >
        Login
      </NavLink>
    </li>
    <li className={classes.authBtn}>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="/signup"
      >
        SignUp
      </NavLink>
    </li>
    <li className={classes.authBtn}>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="/profile"
      >
        Profile
      </NavLink>
    </li>
    {/* <li className={classes.authBtn}>
      <Button className={classes.LogoutBtn} >
        Logout
      </Button>
    </li> */}
  </ul>
);
export default ModalComponents;
