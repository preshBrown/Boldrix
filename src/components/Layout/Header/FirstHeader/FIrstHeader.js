import React from "react";
import DivMotion, { YAxisTop, XAxisRight } from "../../../Motion/DivMotion";

import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import NavItems from "../Navigation/NavItems/NavItems";
import Logo from "./Boldrix.png";
import SearchUi from "./SearchUi/SearchUi";
import classes from "./FIrstHeader.module.css";
import { useState } from "react";

const FIrstHeader = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();




  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
    setOpenSearch(false)
  };

  const inputHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value);
  }

  const toggleSearch = () => {
    console.log("search clicked");
    setOpenSearch(!openSearch);
  };


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
        <SearchUi changed={(e) => inputHandler(e)}  onSubmit={onSubmitHandler} />
      </YAxisTop>

      <XAxisRight className={classes.FirstHeaderNav}>
        <NavItems show={openSearch} searchClicked={toggleSearch.bind(null)} changed={(e) => inputHandler(e)}  onSubmit={onSubmitHandler} />
      </XAxisRight>
    </div>
  );
};

export default FIrstHeader;
