import React, { useState } from "react";
import {
  checkValidation,
  updateObject,
} from "../../../components/Utility/FormUtility/FormUtility";

import classes from "./ResetPassword.module.css";
import GridInputs from "../../../components/GridInputs/GridInputs";
import Button from "../../../components/Interfaces/Button/Button";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [formInfo, setFormInfo] = useState({
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "password",
      },
      classNames: "password-Grid",
      password: true,
      note: "must have a minimum length of 8 characters!",
      visibilityType: "password",
      hide: false,
      label: "Password",
      value: "",
      validation: { required: true, minLength: 8 },
      valid: false,
      touched: false,
    },
    ConfirmPassword: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "confirm password",
      },
      classNames: "Confirm__password-Grid",
      password: true,
      note: "password do not match",
      visibilityType: "ConfirmPassword",
      hide: false,
      label: "Confirm Password",
      value: "",
      validation: { required: true, isConfirmPassword: true },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const toggleVisibility = (visibilityType) => {
    console.log(visibilityType);

    const updated = updateObject(formInfo[visibilityType], {
      hide: !formInfo[visibilityType].hide,
      elementConfig: updateObject(formInfo[visibilityType].elementConfig, {
        type:
          formInfo[visibilityType].elementConfig.type === "password"
            ? "text"
            : "password",
      }),
    });
    const originalForm = updateObject(formInfo, {
      [visibilityType]: updated,
    });

    setFormInfo(originalForm);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const inputHandler = (event, identi) => {
    const cloneForm = { ...formInfo };

    const updated = updateObject(cloneForm[identi], {
      validation: updateObject(cloneForm[identi].validation, {
        checked: identi === "termsAndCondition" && event.target.checked,
      }),
      value:
        identi === "termsAndCondition"
          ? "Agreed"
          : identi === "contact" ||
            identi === "country" ||
            identi === "recaptcha"
          ? event
          : event.target.value,
      touched: true,
    });

    if (identi === "password") {
      updated.note =
        updated.value.length >= 8
          ? "must  contain a Capital letter, small letter, a special character, and a digit!"
          : "must have a minimum length of 8 characters!";
      setConfirmPass(updated.value);
    }

    updated.valid = checkValidation(
      updated.value,
      updated.validation,
      confirmPass
    );

    const originalForm = updateObject(cloneForm, {
      [identi]: updated,
    });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
    }

    setFormInfo(originalForm);
    setFormIsValid(valid);
  };

  const formElements = [];
  for (let key in formInfo) {
    formElements.push({
      id: key,
      config: formInfo[key],
    });
  }

  let form = (
    <div className={classes.ResetPassword}>
      <h3 className={classes["form-title__"]}>Reset Password</h3>
      <form id={classes["form__wrapper"]} onSubmit={submitHandler}>
        {formElements.map((fm) => (
          <div key={fm.id} className={classes[fm.config.classNames]}>
            <GridInputs
              elementType={fm.config.elementType}
              elementConfig={fm.config.elementConfig}
              note={fm.config.note}
              password={fm.config.password}
              hide={fm.config.hide}
              toggleVisibility={toggleVisibility.bind(
                null,
                fm.config.visibilityType
              )}
              shouldVal={fm.config.validation}
              invalid={!fm.config.valid}
              touched={fm.config.touched}
              value={fm.config.value}
              label={fm.config.label}
              changed={(event) => inputHandler(event, fm.id)}
            />
          </div>
        ))}

        <div className={classes["button-Grid"]}>
            <Button W-100 type="submit" disabled={!formIsValid}>
              Reset
            </Button>
        </div>
      </form>
    </div>
  );

  if (
    formInfo.password.valid &&
    formInfo.ConfirmPassword.valid &&
    formInfo.password.value !== formInfo.ConfirmPassword.value
  ) {
    const updated = updateObject(formInfo.ConfirmPassword, { valid: false });
    const originalForm = updateObject(formInfo, { ConfirmPassword: updated });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
    }

    setFormInfo(originalForm);
    setFormIsValid(valid);
  }

  if (
    formInfo.password.valid &&
    formInfo.password.value === formInfo.ConfirmPassword.value &&
    !formInfo.ConfirmPassword.valid
  ) {
    const updated = updateObject(formInfo.ConfirmPassword, { valid: true });
    const originalForm = updateObject(formInfo, { ConfirmPassword: updated });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
    }

    setFormInfo(originalForm);
    setFormIsValid(valid);
  }

  return <section className={classes.ResetPasswordContainer}>{form}</section>;
};

export default ResetPassword;
