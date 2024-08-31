import React from "react";
import { HiBars2, HiBars3, HiBars4 } from "react-icons/hi2";
import Button from "../../../components/Interfaces/Button/Button";

import classes from "./LayoutControl.module.css";

const LayoutControl = (props) => {
  const control = [
    { id: "Four", icon: <HiBars4 className={classes.Icon} size={23} /> },
    { id: "Three", icon: <HiBars3 className={classes.Icon} size={23} /> },
    { id: "Two", icon: <HiBars2 className={classes.Icon} size={23} /> },
    { id: "One", icon: <HiBars3 className={classes.IconOne} size={23} /> },
  ];

  return (
    <div className={classes.LayoutControl}>
      {control.map((ctr) => (
        <Button
          className={`${classes.Control} ${classes[ctr.id]}`}
          clicked={props.controls.bind(null, ctr.id)}
          key={ctr.id}
        >
          {ctr.icon}
        </Button>
      ))}
    </div>
  );
};

export default LayoutControl;
