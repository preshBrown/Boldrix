import React, { useEffect, useState } from "react";
import {
  checkValidation,
  updateObject,
} from "../../../../components/Utility/FormUtility/FormUtility";
import Button from "../../../../components/Interfaces/Button/Button";
import classes from "./LogInForm.module.css";
import GridInputs from "../../../../components/GridInputs/GridInputs";
import { useDispatch, useSelector } from "react-redux";
import { closeError, logIn } from "../../../../store/Auth/loginActions";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../components/Interfaces/Spinner/Spinner";
import ErrorModal from "../../../../components/Interfaces/ErrorModal/ErrorModal";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn);
  const loading = useSelector((state) => state.logIn.loading);
  const message = useSelector((state) => state.logIn.message);
  const error = useSelector((state) => state.logIn.error);
  console.log("🚀 ~ LogInForm ~ error:", error)

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
      validation: { required: true },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) navigate("/");
    }, 1500)
  });

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

    const formData = {
      email: formInfo.email.value,
      password: formInfo.password.value,
    };
    dispatch(logIn(formData));
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
      touched: identi === "email" ? true : false,
    });

    updated.valid = checkValidation(updated.value, updated.validation, null);

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

  const closeErrorModal = () => {
    dispatch(closeError())
  }

  const formElements = [];
  for (let key in formInfo) {
    formElements.push({
      id: key,
      config: formInfo[key],
    });
  }

  let form = (
    <>
    {!!message && <small>{message}</small>}
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
          <small>
            <Button to="/forgot-password">Forgot Password?</Button>
          </small>
          <div>
            <Button W-100 type="submit" disabled={!formIsValid}>
              Login
            </Button>
            <Button className={classes.SignUpBtn} StyleSuccess to="/signup">
              SignUp
            </Button>
          </div>
        </div>
      </form>
    </>
  );
  if (loading) form = <div style={{ paddingTop: "140px", paddingBottom: "140px" }}><Spinner /></div>;

  return <div className={classes.LogInForm}>
    <ErrorModal errorMessage={error} error={error} close={closeErrorModal.bind()} />
    {form}</div>;
};

export default LogInForm;
