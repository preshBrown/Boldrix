import React, { useState } from "react";
import Input from "../../components/Interfaces/Input/Input";
import Map from "./Map/Map";
import classes from "./Contact.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail, MdWifiCalling } from "react-icons/md";
import { ImNotification } from "react-icons/im";

const touchData = [
  {
    id: "address",
    icon: <IoHomeOutline size={20} style={{ verticalAlign: "middle" }} />,
    description:
      "Plot 22 haruk road off Obiwali Road Port Harcourt Rivers , 500001 NG",
  },
  {
    id: "phone",
    icon: <MdWifiCalling size={20} style={{ verticalAlign: "middle" }} />,
    description: "+234810-301-1234",
  },
  {
    id: "mail",
    icon: <MdOutlineMail size={20} style={{ verticalAlign: "middle" }} />,
    description: "boldrixnltd@gmail.com",
  },
  {
    id: "work-days",
    icon: <ImNotification size={20} style={{ verticalAlign: "middle" }} />,
    description: "Monday - Friday 8 AM - 8 PM",
  },
];

const Contact = () => {
  const [contact, setContact] = useState({
    name: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Name" },
      value: "",
      valid: false,
    },

    email: {
      elementType: "input",
      elementConfig: { type: "email", placeholder: "Email" },
      value: "",
      valid: false,
    },
    mobileNumber: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Mobile Number" },
      value: "",
      valid: false,
    },
    comments: {
      elementType: "textarea",
      elementConfig: { type: "text", placeholder: "Message" },
      value: "",
      valid: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event, identi) => {
    const originalContact = { ...contact };

    const updatedContact = {
      ...originalContact[identi],
      value: event.target.value,
    };
    updatedContact.valid = updatedContact.value.trim() !== "";
    originalContact[identi] = updatedContact;

    let isValid = true;
    for (let key in originalContact) {
      isValid = originalContact[key].valid && isValid;
    }

    setContact(originalContact);
    setFormIsValid(isValid);
  };

  const formElement = [];

  for (let key in contact) {
    formElement.push({
      id: key,
      config: contact[key],
    });
  }

  const Contacts = (
    <form onSubmit={submitFormHandler} className={classes.Form}>
      <h1>Contact</h1>
      <div>
        {formElement.map((fm) => (
          <Input
            key={fm.id}
            elementType={fm.config.elementType}
            elementConfig={fm.config.elementConfig}
            value={fm.config.value}
            changed={(event) => inputChangeHandler(event, fm.id)}
          />
        ))}
      </div>
      <button disabled={!formIsValid} type="sumit">Submit</button>
    </form>
  );

  return (
    <>
      <Map />
      <section className={classes.Contacts}>
        {Contacts}
        <div className={classes.InTouch}>
          <h1>Get in touch with us</h1>
          <ul className={classes.Items}>
            {touchData.map((data) => (
              <li className={classes.Item} key={data.id}>
                <span style={{ verticalAlign: "middle" }}>{data.icon}</span>{" "}
                <div>{data.description} </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
