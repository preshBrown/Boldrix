import React, { useState } from "react";

import classes from "./FaqForm.module.css";
import Input from "../../../components/Interfaces/Input/Input";

const FaqForm = (props) => {
  const [formData, setFormData] = useState({
    elementType: "textarea",
    elementConfig: {
      type: "text",
      placeholder: "What can we help you find?",
    },
    value: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("FormValue:", formData.value);
  };
  const inputChangeHandler = (event) => {
    const form = { ...formData };

    form.value = event.target.value;

    setFormData(form);
  };

  const updatedFormData = {
    ...formData,
  };
  return (
    <form className={classes.FormWrapper} onSubmit={submitHandler}>
      <div className={classes.FormContainer}>
        <Input
          className={classes.textarea}
          elementType={updatedFormData.elementType}
          elementConfig={updatedFormData.elementConfig}
          value={updatedFormData.value}
          changed={(e) => inputChangeHandler(e)}
        />{" "}
        <button disabled={formData.value.length === 0}>Submit</button>
      </div>
    </form>
  );
};

export default FaqForm;
