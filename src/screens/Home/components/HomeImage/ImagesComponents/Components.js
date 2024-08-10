import React from "react";

import imageOneClasses from "./ImageOne.module.css";
import imageTwoClasses from "./ImageTwo.module.css";
import imageThreeClasses from "./ImageThree.module.css";

const ComponentOne = (props) => {
  console.log("1-MOUNTED");

  return (
    <div
      style={{ translate: props.translate }}
      className={imageOneClasses.ImageOne}
    >
   { props.index &&     <div
        className={`${imageOneClasses.ImageOneChild} ${imageOneClasses.Open}`}
      >
        <h4 className={imageOneClasses.head}>FEEL.</h4>
        <small>Experience the Bold Taste of Boldrix.</small>
        <small className={imageOneClasses.hide}>
          Refreshingly Bold, Uniquely You.{" "}
        </small>
        <button>Get Started</button>
      </div>}
    </div>
  );
};

const ComponentTwo = (props) => {
  console.log("2-MOUNTED");

  return (
    <div
      style={{ translate: props.translate }}
      className={imageTwoClasses.ImageTwo}
    >
     { props.index &&   <div
        className={`${imageTwoClasses.ImageTwoChild} ${imageTwoClasses.Open}`}
      >
        <h4>Quench Your Thirst.</h4>
        <small>Stay Cool With Every Sip Of Boldrix.</small><br /> 
        <small className={imageTwoClasses.hide}>
          Indulge in the rich, bold flavors that make every gathering unforgettable. {" "}
        </small>
        {/* <button>Get Started</button> */}
      </div>}
    </div>
  );
};

const ComponentThree = (props) => {

  console.log("3-MOUNTED");
  return (
    <div
      style={{ translate: props.translate }}
      className={imageThreeClasses.ImageThree}
    >
    { props.index &&  <div
        className={`${imageThreeClasses.ImageThreeChild} ${imageThreeClasses.Open}`}
      >
        {/* <h4>Slide One</h4> */}
        <small>Let Boldrix be the highlight of your celebrations, bringing people together one drink at a time.</small>
        {/* <small className={imageThreeClasses.hide}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          ratione n{" "}
        </small> */}
        {/* <button>Get Started</button> */}
      </div>}
    </div>
  );
};

const Components = [
  { id: "one", Image: ComponentOne },
  { id: "two", Image: ComponentTwo },
  { id: "three", Image: ComponentThree },
];

export default Components;
