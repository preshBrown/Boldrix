import React, { useState } from "react";
import GridInputs from "../../../../components/GridInputs/GridInputs";
import Button from "../../../../components/Interfaces/Button/Button";
import classes from "./SIgnUpForm.module.css";
import {
  updateObject,
  checkValidation,
} from "../../../../components/Utility/FormUtility/FormUtility";

const SignUpForm = (props) => {
  const [formInfo, setFormInfo] = useState({
    // paymentMethod: {
    //   elementType: "select",
    //   classNames: "payment__method-Grid",
    //   elementConfig: {
    //     option: [
    //       { value: "Master", displayValue: "Master" },
    //       { value: "Visa", displayValue: "Visa" },
    //       { value: "Credit", displayValue: "Credit" },
    //       { value: "Debit", displayValue: "Debit" },
    //     ],
    //   },
    //   label: "PaymentMethod",
    //   value: "Master",
    //   validation: {},
    //   valid: true,
    // },

    fullName: {
      elementType: "input",
      classNames: "full__Name-Grid",
      elementConfig: {
        type: "text",
        placeholder: "full name",
      },
      label: "Full Name",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    image: {
      elementType: "file",
      classNames: "Image-Grid",
      value: "",
      validation: { isFile: true },
      valid: false,
      touched: true,
    },
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
    contact: {
      elementType: "contact",
      classNames: "contact-Grid",
      note: "Not a valid phone number",
      label: "Phone",
      value: "",
      validation: {
        required: true,
        isContact: true,
      },
      valid: false,
      touched: false,
    },
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

    bio: {
      elementType: "textarea",
      classNames: "bio-Grid",
      elementConfig: {
        type: "text",
        placeholder: "bio",
      },
      label: "Bio",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    termsAndCondition: {
      elementType: "checkbox",
      classNames: "terms--and__condition-Grid",
      elementConfig: {
        type: "checkbox",
      },
      label: "Terms & Condition",
      value: "Agreed",
      isSignUp: true,
      validation: { required: true, isChecked: true, checked: false },
      valid: false,
    },
    recaptcha: {
      elementType: "recaptcha",
      classNames: "recaptcha-Grid",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

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

  const setImage = (id, file, valid) => {
    console.log("🚀 ~ setImage ~ file:", file);
    const cloneForm = { ...formInfo };
    // value: "",
    //     validation: { isFile:true},
    //     valid: false,
    //     touched: true,
    const updatedForm = updateObject(cloneForm[id], {
      value: file,
      touched: true,
    });
    updatedForm.valid = checkValidation(
      updatedForm.value,
      updatedForm.validation
    );

    const originalForm = updateObject(cloneForm, { [id]: updatedForm });

    let isValid = true;

    for (let key in originalForm) {
      isValid = originalForm[key].value && isValid;
    }
    setFormInfo(originalForm);
    setFormIsValid(isValid);
  };

  const inputHandler = (event, identi) => {
    console.log("🚀 ~ inputHandler ~ event:", event);

    // console.log(`Currently typing on  ${identi}:  ${event.target.value}`);
    // console.log(`  TERMS EVENT:  ${event.target.checked}`);
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

    // if (identi === "password" && updated.value.length >= 8) {
    //   updated.note =
    //     "must  contain a Capital letter, small letter, a special character, and a digit!";
    // }
    // if (identi === "password" && updated.value.length < 8) {
    //   updated.note = "must have a minimum length of 8 characters!";
    // }
    // if (identi === "password") {
    //   setConfirmPass(updated.value);
    // }

    const originalForm = updateObject(cloneForm, {
      [identi]: updated,
    });

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
      // console.log(`${key}: ${originalForm[key].valid}`);
    }
    // console.log(`FOR ISCHECKED: ${updated.validation.isChecked} `);
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
    <div className={classes.SignUpForm}>
      <h2 className={classes["form-title__"]}>Create Account</h2>
      <form id={classes["form__wrapper"]} onSubmit={submitHandler}>
        {formElements.map((fm) => (
          <div key={fm.id} className={classes[fm.config.classNames]}>
            <GridInputs
              elementType={fm.config.elementType}
              elementConfig={fm.config.elementConfig}
              note={fm.config.note}
              password={fm.config.password}
              hide={fm.config.hide}
              onSetImage={setImage.bind(null, fm.id)}
              toggleVisibility={toggleVisibility.bind(
                null,
                fm.config.visibilityType
              )}
              isSignUp={fm.config.isSignUp}
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
            Sign Up
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

  return <section className={classes.SignUpFormContainer}>{form}</section>;
};

export default SignUpForm;
