import React, { useState } from "react";
import classes from "./FilterCard.module.css";
import FilterSelect from "../FilterSelect/FilterSelect";

const FilterCard = (props) => {
  const [filterValue, setFilterValue] = useState();

  const selectHandler = (e, id) => {
    console.log("🚀 ~ selectHandler ~ id:", id);
  };

  return (
    <section className={classes.FilterCard}>
      <h4>Filter By {props.header}</h4>
      <article className={classes.FilterCardItems}>
        {props.data.map((filterItems) => (
          <FilterSelect
            key={filterItems.id}
            name={filterItems.name}
            value={filterValue}
            changed={(e) => selectHandler(e, filterItems.value)}
          />
        ))}
      </article>

      {props.priceInputs && <div>{props.children}</div>}
    </section>
  );
};

export default FilterCard;
