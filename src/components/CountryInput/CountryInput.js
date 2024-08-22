import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import classes from "./CountryInput.js.module.css"

const CountryInput = (props) => {

    const [selected, setSelected] = useState("")
    console.log("🚀 ~ CountryInput ~ selected:", selected)



  return (
    <>
      <ReactFlagsSelect 
          {...props}
selectButtonClassName={classes["menu-flags-button"]}
className={classes["menu-flags"]}
    //   selected={selected}
    //   onSelect={code => setSelected(code)}
    //   placeholder="Select country"
    //   searchable
    //   searchPlaceholder="Country"
    //   className="menu-flags"
      />
    </>
  );
};

export default CountryInput;
