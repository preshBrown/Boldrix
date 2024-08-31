import React, { useState } from "react";

import classes from "./Sort.module.css";
import Button from "../../../components/Interfaces/Button/Button";
import {
  TbSortAscendingSmallBig,
  TbSortDescendingSmallBig,
} from "react-icons/tb";

const Sort = (props) => {
  const [sortData, setSortData] = useState({
    sortProp: {
      elementConfig: {
        option: [
          { value: "Rating", displayValue: "Rating" },
          { value: "Price", displayValue: "Price" },
          { value: "Alphabetical(A-Z)", displayValue: "Alphabetical(A-Z)" },
        ],
      },
      value: "Rating",
    },
  });

  const selectHandler = (e, id) => {
    const sortClone = { ...sortData };

    const updatedSort = { ...sortClone[id] };
    updatedSort.value = e.target.value;

    sortClone[id] = updatedSort;

    setSortData(sortClone);
    props.setSort(sortClone[id].value);
  };

  const sort = (
    <div className={classes.SortWrapper}>
      <select
        className={classes.Select}
        value={sortData.value}
        onChange={(e) => selectHandler(e, "sortProp")}
        id="multiple"
      >
        {sortData.sortProp.elementConfig.option.map((opt) => (
          <option key={opt.value}>{opt.displayValue}</option>
        ))}
      </select>
      <Button className={classes.SortBtn}>
        <TbSortAscendingSmallBig size={20} /> 
        {/* <TbSortDescendingSmallBig /> */}
      </Button>
    </div>
  );

  return (
    <div className={classes.Sort}>
      <span>Sort By:</span>
      {sort}
    </div>
  );
};

export default Sort;
