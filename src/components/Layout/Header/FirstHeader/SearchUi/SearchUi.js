import React from "react";

import classes from "./SearchUi.module.css";
import { useNavigate } from "react-router-dom";

const SearchUi = (props) => (
  <>
    <form className={classes.SearchUi} onSubmit={props.onSubmit}>
      <input type="search" onChange={props.changed} placeholder="Search..." />
    </form>
  </>
);

export default SearchUi;
