import React, { useState } from "react";
import Champ from "./images/Champagne.jpg";
import Whisky from "./images/whisky.jpg";
import Cognac from "./images/cognac.jpg";
import Wines from "./images/WinesCat.jpg";
import Spirit from "./images/spirits.jpg";
import Tequila from "./images/tequila-sunrise-18167a1.jpg";
import MixNSoft from "./images/Premium-soft-drinks-and-mixer-trends-Fentimans.jpg";
import Water from "./images/water.jpg";

import CatItem from "./CatItem/CatItem";
// import { MdArrowRightAlt } from "react-icons/md";
import classes from "./Category.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const CategoryData = [
//   { name: "Champagne", image: Champ, path: "#" },
//   { name: "Whisky", image: Whisky, path: "#" },
//   { name: "Cognac", image: Cognac, path: "#" },
//   { name: "Wines", image: Wines, path: "#" },
//   { name: "Spirits", image: Spirit, path: "#" },
//   { name: "Tequila", image: Tequila, path: "#" },
//   { name: "Mixers & Soft Drinks", image: MixNSoft, path: "#" },
//   { name: "Water", image: Water, path: "#" },
// ];

const Category = () => {
  const [categoryData, setCategoryData] = useState([
    { name: "Champagne", image: Champ, path: "#" },
    { name: "Whisky", image: Whisky, path: "#" },
    { name: "Cognac", image: Cognac, path: "#" },
    { name: "Wines", image: Wines, path: "#" },
    { name: "Spirits", image: Spirit, path: "#" },
    { name: "Tequila", image: Tequila, path: "#" },
    { name: "Mixers & Soft Drinks", image: MixNSoft, path: "#" },
    { name: "Water", image: Water, path: "#" },
  ]);
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === categoryData.length - 3 || index === categoryData.length - 1) {
        setCategoryData((prevCat) => [...prevCat, ...categoryData]);
        // return index + 1;
      }
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        // setCategoryData((prevCat) => [...categoryData, ...prevCat]);
        return categoryData.length - 1 
        // return 8
      } 

      return index - 1;
    });
  };

  return (
    <section className={classes.Category}>
      <div className={classes.CategoryHeader}>
        <h3>Browse Categories</h3>
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
        className={classes.CategoryImages}
      >
        {categoryData.map((item, index) => (
          <CatItem
            key={index}
            path={item.path}
            Img={item.image}
            name={item.name}
            alt={item.name}
            translate={`${-355.6 * imageIndex}px`}
          />
        ))}
      </article>
    </section>
  );
};

export default Category;
