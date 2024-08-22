import React from "react";
import DivMotion, { YAxisTop, XAxisRight } from "../../../Motion/DivMotion";

import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavItems from "../Navigation/NavItems/NavItems";
import Logo from "./Boldrix.png";
import SearchUi from "./SearchUi/SearchUi";
import classes from "./FIrstHeader.module.css";

const FIrstHeader = (props) => {



  return (
    <div className={classes.FirstHeader}>
      <DivMotion className={classes.FirstHeaderBrand}>
        <button onClick={props.toggle}>
          <FaBars className={classes.Bar} size={30} />
        </button>{" "}
        <Link to="/">
          <img className={classes.BoldrixImg} src={Logo} alt="Boldrix" />
        </Link>
      </DivMotion>
      <YAxisTop className={classes.Search}>
        {" "}
        <SearchUi />
      </YAxisTop>

      <XAxisRight className={classes.FirstHeaderNav}>
        <NavItems />
      </XAxisRight>
    </div>
  );
};

export default FIrstHeader;
