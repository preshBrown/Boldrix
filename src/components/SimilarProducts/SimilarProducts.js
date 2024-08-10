import React, { useState } from "react";

import ProdItem from "./ProdItem/ProdItem";
import classes from "./SimilarProducts.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Spinner from "../Interfaces/Spinner/Spinner";

const SimilarProduct = (props) => {
  const {similarData} = props
  const [imageIndex, setImageIndex] = useState(0);
  

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === similarData.length - 1)  return 0;

      return index + 1; 
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return similarData.length - 1 
      
      return index - 1;
    });
  };

  return (
    <section className={classes.SimilarProduct}>
      <div className={classes.SimilarProductHeader}>
        <h3>Similar Products </h3>
        <div>
          <button onClick={showPrevImage}>
            <IoIosArrowBack size={26} />
          </button>{" "}
          <button onClick={showNextImage}>
            <IoIosArrowForward size={26} />
          </button>
        </div>
      </div>

      <article
        className={classes.SimilarProductImages}
      >
        {similarData.map((item, index) => (
          <ProdItem
            key={index} 
            id={item.id}
            Img={item.image1}
            brand={item.name}
            category={item.category}
            size={item.size}
            alt={item.name}
            translate={`${-355.6 * imageIndex}px`}
          />
        )) || <Spinner />}
      </article>
    </section>
  );
};

export default SimilarProduct;
