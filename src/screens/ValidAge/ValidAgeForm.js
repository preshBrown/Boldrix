import React, { useEffect, useState } from "react";
import GridInputs from "../../components/GridInputs/GridInputs";

import classes from "./ValidAgeForm.module.css";
import Button from "../../components/Interfaces/Button/Button";
import {
  checkValidation,
  updateObject,
} from "../../components/Utility/FormUtility/FormUtility";
import { onIsValidAge } from "../../store/ui/uiActions";
import { useDispatch } from "react-redux";

const ValidAgeForm = (props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    country: {
      elementType: "country",
      elementConfig: {
        placeholder: "Select country",
        searchable: true,
        searchPlaceholder: "Country",
      },
      classNames: "country-Grid",
      note: "Pick a residence",
      label: "Residence",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    yearOfBirth: {
      elementType: "date",
      elementConfig: {
        type: "date",
        min: "1915-01-01",
        max: "2024-12-31",
      },
      classNames: "date-Grid",
      note: "",
      label: "Year Of Birth",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    consent: {
      elementType: "checkbox",
      classNames: "consent-Grid",
      elementConfig: {
        type: "checkbox",
      },
      label: "REMEMBER ME",
      value: "Agreed",
      isSignUp: false,
      validation: { required: true, isChecked: true, checked: false },
      valid: true,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);



  const submitHandler = (e) => {
    e.preventDefault();
    const cloneData = { ...formData };

    const data = {};

    for (let key in cloneData) {
      data[key] = cloneData[key].value;
    }

    console.log("🚀 ~ submitHandler ~ data:", data);

    const dateOfBirth = data.yearOfBirth.split("-")[0];

    const isValidAge = 2024 - +dateOfBirth;

    if (data.country === "US" && isValidAge < 21) return setIsValidAge(true);

    if (isValidAge >= 18) dispatch(onIsValidAge());
    else setIsValidAge(true);

    console.log("🚀 ~ submitHandler ~ isValidAge:", isValidAge);
  };

  const inputHandler = (event, identi) => {
    console.log("🚀 ~ inputHandler ~ event:", event);

    // console.log(`Currently typing on  ${identi}:  ${event.target.value}`);
    // console.log(`  TERMS EVENT:  ${event.target.checked}`);
    const cloneForm = { ...formData };

    const updated = updateObject(cloneForm[identi], {
      validation: updateObject(cloneForm[identi].validation, {
        checked: identi === "consent" && event.target.checked,
      }),
      value:
        identi === "consent"
          ? "Remember"
          : identi === "contact" ||
            identi === "country" ||
            identi === "recaptcha"
          ? event
          : event.target.value,
      touched: true,
    });

    updated.valid =
      identi === "consent"  ? true : checkValidation(updated.value, updated.validation, null);

    if (identi === "consent" && updated.validation.checked) localStorage.setItem("userConsent", "true");
    else localStorage.removeItem("useConsent");

    const originalForm = updateObject(cloneForm, {
      [identi]: updated,
    });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
      // console.log(`${key}: ${originalForm[key].valid}`);
    }
    // console.log(`FOR ISCHECKED: ${updated.validation.isChecked} `);
    setFormData(originalForm);
    setFormIsValid(valid);
  };

  const formElements = [];

  for (let key in formData) {
    formElements.push({
      id: key,
      config: formData[key],
    });
  }

  const form = (
    <div>
      <form onSubmit={submitHandler}>
        <article className={classes.inputFields}>
          {formElements.map((fm) => (
            <div key={fm.id} className={classes[fm.config.classNames]}>
              <GridInputs
                elementType={fm.config.elementType}
                elementConfig={fm.config.elementConfig}
                note={fm.config.note}
                shouldVal={fm.config.validation}
                invalid={!fm.config.valid}
                touched={fm.config.touched}
                value={fm.config.value}
                label={fm.config.label}
                changed={(event) => inputHandler(event, fm.id)}
              />
            </div>
          ))}
          <small className={classes.Tick}>
            Do not tick the box if the device is shared
          </small>
        </article>

        <div className={classes.DClaimer}>
          <small>
            By clicking the enter button, you confirm that you are the required
            age of your country/region to visit our website, you accept Terms
            and Conditions and you declare that you have read our Privacy &
            Cookies notice.
          </small>
          <Button disabled={!formIsValid} className={classes.ValidAgeBtn} W-200>
            Submit
          </Button>
          {isValidAge && (
            <div className={classes.notAllowed}>
              <p>
                SORRY, YOU ARE UNDER THE LEGAL AGE, WE CAN NOT WELCOME YOU ON
                OUR SITE.
              </p>
            </div>
          )}
        </div>
      </form>

      <div className={classes.OutTro}>
        <small>
          THE ABUSE OF ALCOHOL IS DANGEROUS FOR YOUR HEALTH. DRINK RESPONSIBLY.
        </small>
        <small>
          We support the responsible consumption of wines and spirits.
        </small>
      </div>
    </div>
  );

  return <>{form}</>;
};

export default ValidAgeForm;
