import React from "react";
import logo from "./Boldrix.png"

import classes from "./BoldrixIntro.module.css"

const BoldrixIntro = () => {
  return (
    <section className={classes.BoldrixIntro}>
      <div className={classes.ImgWrapper}>
        <img className={classes.Img} src={logo} alt="Boldrix" />
      </div>

      <article>
        <p>
          Welcome to Boldrix Nigeria Limited, where passion meets craftsmanship
          in the world of wines and beverages. As a distinguished company, we
          take pride in curating a diverse range of high-quality, premium
          beverages that elevate every moment. Established with a commitment to
          excellence, Boldrix is dedicated to delivering unparalleled taste
          experiences.
        </p>
      </article>
    </section>
  );
};

export default BoldrixIntro;
