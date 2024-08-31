import React from 'react';
import image from "./Bespoke-bourbon-cream.jpg"
import classes from "./SearchListItems.module.css"
import { Link } from 'react-router-dom';

const SearchListItems = (props) => {

    const list = (
        <li className={classes.ListItem}>
            <Link to="#">
            <article className={classes.ItemContainer}>
                <div className={classes.ImageContainer}>
                    <img src={image} alt='ListItems' />
                </div>
                <div className={classes.Description}>
                    <span>
                    Lorem ipsum, dolor sit amet consectetur
                    </span>
                </div>
            </article>
            </Link>
        </li>
    )
  return (
    <ul  className={classes.SearchListItems}>
      {list}
      {list}
      {list}
      {list}
    </ul>
  )
}

export default SearchListItems
