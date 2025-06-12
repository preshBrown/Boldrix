import React from "react";
import Button from "../../Button/Button";
import classes from "./ModalComponents.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/Auth/loginActions";

const ModalComponents = (props) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn);
  const userId = useSelector((state) => state.logIn.userId);

  if (isLoggedIn)
    return (
      <ul className={classes.ModalComponents}>
        <li className={classes.authBtn}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to={`/profile/${userId}`}
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.authBtn}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/orders"
          >
            Orders
          </NavLink>
        </li>
        <li className={classes.authBtn}>
          <Button
            clicked={() => dispatch(logout())}
            className={classes.LogoutBtn}
          >
            Logout
          </Button>
        </li>
      </ul>
    );

  return (
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
      {/* <li className={classes.authBtn}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/forgot-password"
        >
          Forgot Password
        </NavLink>
      </li> */}
    </ul>
  );
};
export default ModalComponents;
