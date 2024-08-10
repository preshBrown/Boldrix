import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import classes from "./ImageSlider.module.css";

const ImageSlider = (props) => {
  const { images } = props;
  const [imageIndex, setImageIndex] = useState(0);



  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(showNextImage, 5000);
    return () => clearInterval(interval);
  });


  const switchImage = (index) => {
    setImageIndex(index);
  };


  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {" "}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <img
            className={classes["img-slider-img"]}
            key={image.url}
            src={image.url}
            alt={image.alt}
            aria-hidden={imageIndex !== index}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className={classes["img-slider-btn"]}
        onClick={showPrevImage}
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <FaArrowAltCircleLeft aria-hidden />
      </button>
      <button
        className={classes["img-slider-btn"]}
        onClick={showNextImage}
        style={{ right: 0 }}
        aria-label="View Previous Image"
      >
        <FaArrowAltCircleRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
          key={index}
            className={classes["img-slider-dot-btn"]}
            onClick={switchImage.bind(_, index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <FaRegDotCircle aria-hidden />
            ) : (
              <FaRegCircle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
