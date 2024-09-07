import React from "react";
import ProductList from "./ProductList";
import classes from "./ProductLayout.module.css";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductLayout = (props) => {
  return (
    <section className={classes.ProductLayout}>
      <header className={classes.ProductLayoutHeader}>
        {props.badgeIcon && <div className={classes.HeaderIcons}>
          <span className={classes.badgeIcon}>{props.badgeIcon}</span>
          <span className={classes.beerIcon1}>{props.beerIcon}</span>
        </div>}
        <div className={classes.HeaderInfo}>
          <h2>{props.category}</h2>
        <p>{props.description} </p>
        </div>
      </header>

      <article>
        <ul className={classes.itemsContainer}>
          {props.items.length ? props.items.map((item) => (
            <ProductList
              key={item.id}
              id={item.id}
              image1={item.image1}
              image2={item.image2}
              category={item.category}
              rating={+item.rating}
              price={item.price}
              name={item.name}
            />
          )) : props.items}
        </ul>
      </article>
      <Link className={classes.ViewAll} to="#"><span>View all</span> <MdArrowRightAlt style={{verticalAlign: "middle"}} size={26} /> </Link>
    </section>
  );
};

export default ProductLayout;
