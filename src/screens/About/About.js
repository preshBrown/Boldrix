import React from "react";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

import img1 from "./Images/Bespoke-bourbon-cream.jpg"
import img2 from "./Images/images.jpeg"
import img3 from "./Images/liquor-2.jpg"

import classes from "./About.module.css";

const About = () => {

  return (
    <section className={classes.About}>
      <div className={classes.AboutImage}>
        <h1>About Us</h1>
      </div>

      <header>Boldrix Limited: Crafting Exquisite Moments in Every Sip</header>

      <article className={classes.AboutWrapper}>
        <div className={classes.AboutImgItemsWrapper}>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img1} alt="Boldrix-wine" />
          </div>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img2} alt="Boldrix-spirit" />
          </div>
          <div className={classes.ImageContainer}>
            <img className={classes.img} src={img3} alt="Boldrix-cream" />
          </div>
        </div>

        <div className={classes.AboutDescription}>
          <p>
            Welcome to Boldrix Nigeria Limited, where passion meets
            craftsmanship in the world of wines and beverages. As a
            distinguished company, we take pride in curating a diverse range of 
            high-quality, premium beverages that elevate every moment.
            Established with a commitment to excellence, Boldrix is dedicated to
            delivering unparalleled taste experiences. Our extensive selection
            of wines and beverages reflects a fusion of tradition and
            innovation, ensuring that each bottle tells a unique story of flavor
            and sophistication. At Boldrix, we prioritize the satisfaction of
            our customers by consistently adhering to stringent quality
            standards. With a team of dedicated experts, we source and blend the
            finest ingredients to create beverages that cater to diverse
            preferences. Whether you're celebrating life's milestones or
            savoring everyday moments, Boldrix is your trusted companion. Join
            us on a journey of refined taste, where every sip is a celebration
            in itself.
          </p>
        </div>
      </article>

      <div>
          <WhyChooseUs />
      </div>

      <div>{/* Explore other category  */}</div>
    </section>
  );
};

export default About;
