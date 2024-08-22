import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import classes from "./ContactInput.module.css"

const ContactInput = (props) => {

  const inputClasse = [classes["inputClass"]]
  if (props.notValid) inputClasse.push(classes.Invalid)

  return (
    <>
    <PhoneInput 
    inputClass={inputClasse.join(" ")}
    className={classes.ContactInput} 
    {...props} />
    </>
  )
}

export default ContactInput