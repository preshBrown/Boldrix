import React from "react";
import classes from "./FilterSelect.module.css";

const FilterSelect = (props) => {

    
  return (
    <div className={classes.FilterSelect}>
         <input
        value={props.value}
        type="checkbox"
        onChange={props.changed}
        className={classes.CheckBoxs}
      />{" "}
      <h5>{props.name}</h5>
     
    </div>
  );
};

export default FilterSelect;
