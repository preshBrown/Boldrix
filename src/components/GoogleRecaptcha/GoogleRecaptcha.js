import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'



export const GoogleRecaptcha = (props) => {
const [capVal, setCapVal] = useState(null) 
console.log("🚀 ~ GoogleRecaptcha ~ capVal:", capVal)



  return (
    <>
        <ReCAPTCHA  {...props} />
    </>
  )
}
