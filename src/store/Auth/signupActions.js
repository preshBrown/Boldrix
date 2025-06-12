import { signupActions } from "./signupSlice";

export const signUp = (postData) => {
  return (dispatch) => {
    console.log("API Block");
    dispatch(signupActions.startOperation());

    const submitData = async () => {
      const formValue = {
        ...postData,
      };
      console.log(postData);

      try {
        // name: formInfo.fullName.value,
        // email: formInfo.email.value,
        // password: formInfo.password.value,
        // image: formInfo.image.value,
        // contact: formInfo.contact.value,
        // country: formInfo.country.value,
        // bio: formInfo.bio.value,

        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("image", formValue.image);
        formData.append("contact", formValue.contact);
        formData.append("country", formValue.country);
        formData.append("bio", formValue.bio);

        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
          console.log("ERROR--BLOCK");
        }

        console.log("DATA" + data.post);
        dispatch(signupActions.operationSuccessful(data.message));
      } catch (err) {
        console.log("CATCH error block" + err.message);
        dispatch(signupActions.operationFaild(err.message));
      }
    };
    submitData();
  };
};

export const onCloseSignUpError = () => {
  return (dispatch) => {
    dispatch(signupActions.resetSignUpError());
  };
};
export const onResetIsSignedUp = () => {
  return (dispatch) => {
    dispatch(signupActions.resetIsSignUp());
  };
};
