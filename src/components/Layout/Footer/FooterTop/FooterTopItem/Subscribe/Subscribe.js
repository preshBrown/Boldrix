import React, { useState } from "react";
import Input from "../../../../../Interfaces/Input/Input";
import  { FaTelegramPlane } from "react-icons/fa";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    elementConfig: { type: "email", placeholder: "Your Email Address" },
    value: "",
  });


  const submitHandler = (e) => {
    e.preventDefault();

    console.log("FormValue:", formData.value);



  }
  const inputChangeHandler = (event) => {

    const form = {...formData};

    form.value = event.target.value

    setFormData(form)
  }

  const updatedFormData = {
    ...formData,
  };

  return (
    <div className={classes.Subscribe}>
      <h1>
        <span><FaTelegramPlane /></span>Sign Up For Newsletter
      </h1>
      <div className={classes.FormContainer}>
        {" "}
        <form className={classes.FormWrapper} onSubmit={submitHandler}>
          <Input
            className={classes.CustomInput}
            elementConfig={updatedFormData.elementConfig}
            value={updatedFormData.value}
            changed={(e) => inputChangeHandler(e)} 
          />{" "}
          <button>Subscribe</button> 
        </form>
      </div>
    </div>
  ); 
};

export default Subscribe;
