import React from 'react'


import { Link } from 'react-router-dom'
import classes from "./FooterTopItem.css.module.css"

const FooterTopItem = (props) => {
  return (
    <li className={classes.FooterTopItem} >
      <Link className={classes.ItemContainer} to={props.to}>
        <div className={classes.ItemIcons}>{props.icon}</div>  <div>{props.data}</div>
      </Link>
    </li>
  )
}

export default FooterTopItem