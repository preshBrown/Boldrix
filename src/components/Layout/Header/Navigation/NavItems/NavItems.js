import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";
import AuthModal from "../../../../Interfaces/AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { openAuthUi, closeAuthUi } from "../../../../../store/ui/uiActions";
import { RiStore3Fill } from "react-icons/ri";
import Modal from "../../../../Interfaces/Modal/Modal";
import SearchUi from "../../FirstHeader/SearchUi/SearchUi";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../../../../screens/ProductsStore/FilterLayout/FilterModal/FilterModal";
import SearchListItems from "../../FirstHeader/SearchUi/SearchListItems/SearchListItems";

const NavItems = (props) => {
  const dispatch = useDispatch();
  const authDropdown = useSelector((state) => state.ui.authDropdown);

  // useEffect(() => {
  //   console.log("Rendered");

  // }, [authNav])


  const openADropdown = () => {
    dispatch(openAuthUi());
  };

  const closeADropdown = () => {
    dispatch(closeAuthUi());
  };
  return (
    <>
      <FilterModal  footerClass={classes.FilterModalFooterClass}  show={props.show} close={props.searchClicked}>
        <div className={classes.SearchWrapper}>
        <SearchUi changed={props.changed}  onSubmit={props.onSubmit} /> 
        {/* <span className={classes.LoadingWrapper}>L-D</span> */}
        <article className={classes.SearchListWrapper}>
          <SearchListItems />
        </article>
        </div>
      </FilterModal>

      <AuthModal show={authDropdown} close={closeADropdown} />

      <ul className={classes.NavItems}>
        <button className={classes.NavButton} onClick={openADropdown}>
          <FaUser />
        </button>
        <NavItem to="/products">
          <RiStore3Fill size={20} />
        </NavItem>

        <button
          onClick={props.searchClicked}
          className={`${classes.NavButton} ${classes.NavSearch}`}
        >
          <CiSearch size={20} />
        </button>
        <NavItem style={{ position: "relative" }} to="/cart">
          <TiShoppingCart size={20} />{" "}
          <span className={classes.TotalCart}>0</span>
        </NavItem>
      </ul>
    </>
  );
};

export default NavItems;
