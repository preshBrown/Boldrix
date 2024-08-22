import React, { useState } from "react";
import { checkValidation, updateObject } from "../../../components/Utility/FormUtility/FormUtility";

import classes from "./ForgotPassword.module.css"
import GridInputs from "../../../components/GridInputs/GridInputs";
import Button from "../../../components/Interfaces/Button/Button";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
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
        validation: { required: true, isEmail: true },
        valid: false,
        touched: false,
      }
    });
    const [formIsValid, setFormIsValid] = useState(false);


    const navigate = useNavigate()
  
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
      navigate("/reset-password/reset")

      
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
            touched: true
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
      <div className={classes.ForgotPassword}>
        <h3 className={classes["form-title__"]}>Reset Your Password</h3>
        <small>We will send you an email to reset your password</small>
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
              <Button  W-100 type="submit" disabled={!formIsValid}>
                Submit
              </Button>
              <Button className={classes.SignUpBtn}  to="/login">Cancel</Button>
          </div>
        </form>
      </div>
    );
  
    return <section className={classes.ForgotPasswordContainer}>{form}</section>;
  };
  
  export default ForgotPassword;
  