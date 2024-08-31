import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./NavItem.module.css"


const NavItem = (props) => {
  return (
    <li onClick={props.clicked} className={`${classes.NavItem} ${props.className}`}>
      <NavLink to={props.to}
      className={navData => navData.isActive ? classes.active : ""}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavItem