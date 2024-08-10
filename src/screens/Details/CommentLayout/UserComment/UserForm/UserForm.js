import React, { useState } from "react";
import Input from "../../../../../components/Interfaces/Input/Input";
import ReactStars from "react-rating-stars-component";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    elementType: "textarea",
    elementConfig: {
      type: "text",
      placeholder: "Say a few words about this drink",
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
  const review = (
    <article className={classes.Review}>
      <div>
        <header>
          <h3>Your Review</h3>
          <p>
            You're rating the Sarah Francis Sage Ridge Vinyard Cabernet
            Sauvignon 2024
          </p>
        </header>
      </div>

      <div className={classes.CommentCardProfile}>
        <div className={classes.CommentCardProfileImg}>
          <img src={props.Img} alt={props.alt} />
        </div>

        <div className={classes.CommentCardProfileDetails}>
          <ReactStars
            count={5}
            edit={true}
            size={28}
            value={3}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </article>
  );

  return (
    <section style={{marginBottom: "15px"}}>
      <>{review}</>
      <form className={classes.FormWrapper} onSubmit={submitHandler}>
        <div className={classes.FormContainer}>
          <Input
            className={classes.textarea}
            elementType={updatedFormData.elementType}
            elementConfig={updatedFormData.elementConfig}
            value={updatedFormData.value}
            changed={(e) => inputChangeHandler(e)}
          />{" "}
          <button disabled={formData.value.length === 0}>Add Comment</button>
        </div>
      </form>
    </section>
  );
};

export default UserForm;
