import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let input = null

  switch (props.elementType) {
    case "input":
      input = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className={[classes.Textarea, props.className].join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      input = (
        <div className={classes.Select}>
          <label for="multiple">{props.label}</label>
          <select value={props.value} onChange={props.changed} id="multiple">
            {props.elementConfig.options.map((opt) => (
              <option key={opt.value}>{opt.displayValue}</option>
            ))}
          </select>
        </div>
      );
      break;
      default :
      input = (
        <input
          className={props.className}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return input;
};

export default Input;
