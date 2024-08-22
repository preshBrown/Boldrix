import React, { useState } from "react";
import { checkValidation, updateObject } from "../../../../components/Utility/FormUtility/FormUtility";
import Button from "../../../../components/Interfaces/Button/Button";
import classes from "./LogInForm.module.css";
import GridInputs from "../../../../components/GridInputs/GridInputs";

const LogInForm = () => {
  const [formInfo, setFormInfo] = useState({
    email: {
      elementType: "input",
      classNames: "email-Grid",
      note: "Not a valid email",
      elementConfig: {
        type: "email",
        placeholder: "email",
      },
      label: "Email",
      value: "",
      validation: { required: true, isEmail: true},
      valid: false,
      touched: false,
    },
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
      validation: { required: true, },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

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
          touched: identi === "email" ? true : false
    });


    updated.valid = checkValidation(
      updated.value,
      updated.validation,
       null
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
    <>
      <h3 className={classes["form-title__"]}>Login</h3>
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
            <small><Button to="/forgot-password">Forgot Password?</Button></small>
          <div>
            <Button W-100 type="submit" disabled={!formIsValid}>
              Login
            </Button>
            <Button className={classes.SignUpBtn} StyleSuccess to="/signup">SignUp</Button>
          </div>
        </div>
      </form>
    </>
  );

  return <div className={classes.LogInForm}>{form}</div>;
};

export default LogInForm;
