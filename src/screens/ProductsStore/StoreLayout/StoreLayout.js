import React from "react";

import Img1 from "./Bespoke-bourbon-cream.jpg"
import Img2 from "./water.jpg"

import classes from "./StoreLayout.module.css";
import StoreItem from "./StoreItem/StoreItem";


const StoreLayout = (props) => {
  return (
    <ul
      className={`${classes.Store_Layout} ${props.switched && classes.Switched} ${!props.filter && classes.OpenFilter}`}
    >
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
      <StoreItem Modes={props.LayoutModes} image1={Img1} image2={Img2} />
    </ul>
  );
};

export default StoreLayout;
