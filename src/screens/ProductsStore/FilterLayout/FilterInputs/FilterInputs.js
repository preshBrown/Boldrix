import React from "react";
import classes from "./FilterInputs.module.css";

const FilterInputs = (props) => {
    
  return (
    <>
      <h4 className={classes.FilterInputsHeader}>Price Range</h4>
      <div className={classes.FilterInputs}>
        <input
          className={classes.Form}
          value={props.valueFrom}
          onChange={props.changed.bind(null, "From")}
          type="number"
          placeholder="From"
        />
        <input
          className={classes.To}
          value={props.valueTo}
          onChange={props.changed.bind(null, "to")}
          type="number"
          placeholder="To"
        />
      </div>
    </>
  );
};

export default FilterInputs;
