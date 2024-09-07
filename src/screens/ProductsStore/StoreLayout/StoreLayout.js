import React from "react";

import Img1 from "./Bespoke-bourbon-cream.jpg";
import Img2 from "./water.jpg";

import classes from "./StoreLayout.module.css";
import StoreItem from "./StoreItem/StoreItem";
import Spinner from "../../../components/Interfaces/Spinner/Spinner";

const StoreLayout = (props) => {
  let items = (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Spinner />
    </div>
  );

  if (!props.loading)
    items = props.productStore.map((products) => (
      <StoreItem
        id={products.id}
        Modes={props.LayoutModes}
        image1={products.image1}
        image2={products.image2}
        rating={products.rating}
        brand={products.brand}
        price={products.price}
        descriptionSummary={products.descriptionSummary}
      />
    ));

  return (
    <ul
      className={`${classes.Store_Layout} ${
        props.switched && classes.Switched
      } ${!props.filter && classes.OpenFilter}`}
    >
      {items}
    </ul>
  );
};

export default StoreLayout;
