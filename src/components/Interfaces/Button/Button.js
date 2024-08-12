import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {




  const functionality = (
    <>
      <div>
        <Button to="#">LinkDEFAULT</Button>

        <Button to="#" Danger>
          LinkDEFAULTDanger
        </Button>

        <Button to="#" Success>
          LinkDEFAULTSuccess
        </Button>

        <Button to="#" StyleDanger>
          LinkStyleDanger
        </Button>

        <Button to="#" StyleSuccess>
          LinkStyleSuccess
        </Button>
      </div>

      <h1>Button starts here</h1>
      <div>
        <Button W-100 disabled={false}>
          default
        </Button>

        <Button W-200 disabled={false} StyleDanger>
          defaultStyleDanger
        </Button>
      </div>
    </>
  );

  
  if (props.to)
    return (
      <Link
        to={props.to}
        className={[
          classes.Button,
          props.className,
          props.StyleDanger ? classes.StyleDanger : "",
          props.StyleSuccess ? classes.StyleSuccess : "",
          props.Danger ? classes.Danger : "",
          props.Success ? classes.Success : "",
        ].join(" ")}
      >
        {props.children}
      </Link>
    );

  return (
    <button
      className={[
        classes.ButtonBtn,
        props.className,
        props.StyleDanger ? classes.StyleDanger : "",
        props["W-100"] ? classes["W-100"] : "",
        props["W-200"] ? classes["W-200"] : "",
      ].join(" ")}
      disabled={props.disabled}
      type={props.type}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
