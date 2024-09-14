import React, { useState } from "react";
import Logo from "./Boldrix.png";

import classes from "./ValidAge.module.css";
import ValidAgeForm from "./ValidAgeForm";
import { useDispatch, useSelector } from "react-redux";
// import { onIsValidAge } from "../../store/ui/uiActions";

const ValidAge = () => {

  const ofValidAge = useSelector(
    (state) => state.ui.isValidAge
  );
  // const [ofValidAge, setOfValidAge] = useState(true);
  // console.log("🚀 ~ ValidAge ~ ofValidAge:", ofValidAge)

  // const toggle = () => {
  //   console.log("🚀 ~ tampared ~ ofValidAge:")
  //   onIsValidAge();
  // };

  const validAge = (ofValidAge && <section className={classes.Valid_age}>
      <div className={classes.Valid_ageWrapper}>
        <header className={classes.Valid_ageWrapperHeader}>
          <div className={classes.LogoWrapper}>
            <img src={Logo} alt="BOLDRIX" />
          </div>
          <p>
            To visit our website, you must be of legal drinking/purchasing age
            in your location of residence. If there is no legal age for
            consuming alcohol in your location, you must be over 21.
          </p>
        </header>

        <ValidAgeForm />
      </div>
    </section>
  );

  return <>{validAge}</>;
};

export default ValidAge;
