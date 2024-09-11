import React from 'react'
import { Link } from 'react-router-dom'
import image from "./Bespoke-bourbon-cream.jpg"


import classes from "./OrderListItem.module.css"





const OrderListItem = (props) => {
  return (
    <li className={classes.ListItem}>
    <article className={classes.ItemContainer}>
        <div className={classes.ImageContainer}>
            <img src={props.img} alt='ListItems' />
        </div>
        <div className={classes.Description}>
            <span>
            {props.description}
            </span>
        </div>
    </article>
</li>
  )
}

export default OrderListItem