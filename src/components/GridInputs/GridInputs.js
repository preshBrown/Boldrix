import React from "react";
import classes from "./GridInputs.module.css";
import { ImNotification } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Interfaces/Button/Button";
import ImageInput from "../ImageInput/ImageInput";
import ContactInput from "../ContactInput/ContactInput";
import CountryInput from "../CountryInput/CountryInput";
import { GoogleRecaptcha } from "../GoogleRecaptcha/GoogleRecaptcha";

const GridInputs = (props) => {
  const { invalid, shouldVal, touched } = props;
  let gInputs;
  const inputClass = [classes.GridInputs];
  if (invalid && touched && shouldVal) {
    inputClass.push(classes.Invalid);
  }

  const checkOut = inputClass.concat(classes.Invalid).join(" ");

  console.log("🚀 ~ GridInputs ~ checkOut:", checkOut);

  switch (props.elementType) {
    case "input":
      gInputs = (
        <div
          className={`${props.className} ${props.password && classes.Relative}`}
        >
          <label className={classes.Label}>
            {props.label}{" "}
            {invalid && touched ? (
              <small className={classes["error__message"]}>
                <span className={classes.Icon}>
                  {" "}
                  <ImNotification />
                </span>{" "}
                {props.note}
              </small>
            ) : null}
          </label>
          <input
            className={inputClass.concat(classes.Input).join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />{" "}
          {props.password && (
            <span className={classes.Svg} onClick={props.toggleVisibility}>
              {" "}
              {props.hide ? <FaEyeSlash /> : <FaEye />}{" "}
            </span>
          )}
        </div>
      );
      break;

    case "textarea":
      gInputs = (
        <div className={props.className}>
          <label className={classes.Label}>
            {props.label}{" "}
            {invalid && touched ? (
              <small className={classes["error__message"]}>
                <span className={classes.Icon}>
                  <ImNotification />
                </span>{" "}
                {props.note}
              </small>
            ) : null}
          </label>
          <textarea
            className={[...inputClass, classes.Textarea].join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
      break;
    case "checkbox":
      gInputs = (
        <div className={`${props.className} ${classes.CheckContainer}`}>
          <input
            className={[...inputClass, classes.Check].join(" ")}
            {...props.elementConfig}
            onChange={props.changed}
            required={false}
          />
          <label>
            {props.isSignUp ? (
              <>
                {" "}
                Agree to{" "}
                <Button to="/terms-and-conditions">{props.label}</Button>
              </>
            ) : (
              <Button to="#">{props.label}</Button>
            )}
          </label>
        </div>
      );
      break;
    case "select":
      gInputs = (
        <div className={props.className}>
          <label className={classes.Label}>{props.label}</label>
          <select
            className={[...inputClass, classes.Select].join(" ")}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.option.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.displayValue}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    case "file":
      gInputs = (
        <div className={props.className}>
          <ImageInput onInput={props.onSetImage} />
          {invalid && touched && <p>{props.note}</p>}
        </div>
      );
      break;
    case "contact":
      gInputs = (
        <div className={props.className}>
          <label className={classes.Label}>
            {props.label}{" "}
            {invalid && touched ? (
              <small className={classes["error__message"]}>
                <span className={classes.Icon}>
                  {" "}
                  <ImNotification />
                </span>{" "}
                {props.note}
              </small>
            ) : null}
          </label>
          <ContactInput
            notValid={invalid && touched}
            country={"us"}
            value={props.value}
            onChange={props.changed}
            inputProps={{ required: true }}
          />
        </div>
      );
      break;
    case "country":
      gInputs = (
        <div className={props.className}>
          <label className={classes.Label}>
            {props.label}{" "}
            {invalid && touched ? (
              <small className={classes["error__message"]}>
                <span className={classes.Icon}>
                  {" "}
                  <ImNotification />
                </span>{" "}
                {props.note}
              </small>
            ) : null}
          </label>
          <CountryInput
            selected={props.value}
            onSelect={props.changed}
            {...props.elementConfig}
          />
        </div>
      );
      break;
    case "date":
      gInputs = (
        <div className={props.className}>
          <label className={classes.Label}>
            {props.label}{" "}
            {invalid && touched ? (
              <small className={classes["error__message"]}>
                <span className={classes.Icon}>
                  {" "}
                  <ImNotification />
                </span>{" "}
                {props.note}
              </small>
            ) : null}
          </label>
          <input
            className={inputClass.concat(classes.Input).join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            // min={1915}
            // max={2024}
          />
        </div>
      );
      break;

    case "recaptcha":
      gInputs = (
        <div className={props.className}>
          {/* <label className={classes.Label}>
                {props.label}{" "}
                {invalid && touched ? (
                  <small className={classes["error__message"]}>
                   <span className={classes.Icon}> <ImNotification /></span> {props.note}
                  </small>
                ) : null}
              </label> */}
          <GoogleRecaptcha
            sitekey="6LcilioqAAAAAJFOLJjBgeHDa3TNcS5E7jxP5TCy"
            onChange={props.changed}
          />
        </div>
      );
      break;
    default:
      gInputs = (
        <div className={`${props.className}`}>
          <input
            className={[...inputClass, classes.Input]}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
  }

  return <div>{gInputs}</div>;
};

export default GridInputs;
