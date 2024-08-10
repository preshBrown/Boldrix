import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./SideNavItem.module.css"


const NavItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink to={props.to}
      className={navData => navData.isActive ? classes.active : ""}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavItem