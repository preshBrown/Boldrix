import React, { useState } from 'react';
import Input from '../../../../components/Interfaces/Input/Input';

import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
    const [formData, setFormData] = useState({
        elementConfig: { type: "text", placeholder: "Enter Code here" },
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
    <div className={classes.FormContainer}>
        {" "}
        <form className={classes.FormWrapper} onSubmit={submitHandler}>
          <Input
            className={classes.CustomInput}
            elementConfig={updatedFormData.elementConfig}
            value={updatedFormData.value}
            changed={(e) => inputChangeHandler(e)} 
          />{" "}
          <button>APPLY</button> 
        </form>
      </div>
  )
}

export default AuthForm