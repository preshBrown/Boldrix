import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

import classes from "./ProductInfo.module.css";

const ProductInfo = (props) => {
  const [open, setOpen] = useState(false);

  const openInfo = () => {
    setOpen(!open);
    console.log("🚀 ~ ProductInfo ~ open:", open);
  };

  return (
    <>
      <div className={`${classes.ProductInfo} ${open ? classes.Open : ""}`}>
        <header className={classes.ProductInfoHeader}>
          <h4>{props.header}</h4>{" "}
          <FaChevronRight
            className={classes.Icon}
            onClick={openInfo.bind(this)}
            size={23}
          />
        </header>
        {open && (
          <div className={classes.ProductInfoDescription}>
            <h5>{props.subHeader}</h5>
            <p>{props.description}</p>
            <ol style={{margin: 0, padding: "15px"}}>
              {props.keyFeatures && props.keyFeatures.map((keyF, index) => (
                <li key={index}>{keyF}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductInfo;
