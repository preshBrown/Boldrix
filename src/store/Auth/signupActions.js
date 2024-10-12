import { signupActions } from "./signupSlice";

export const signUp = (postData) => {
  return (dispatch) => {
    console.log("API Block")
    dispatch(signupActions.startOperation());

    const submitData = async () => {

      const formData = {
        ...postData
      }
      console.log(postData);

      try {

        const response = await fetch("http://localhost:5000/api/users/signup",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
       },
          body: JSON.stringify(formData)
      });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
          console.log("ERROR--BLOCK");
        }

        console.log("DATA" + data.post);
        dispatch(signupActions.operationSuccessful());
        
      } catch (err) {
        console.log("CATCH error block" + err.message);
        dispatch(signupActions.operationFaild(err.message));
      }
    };
    submitData();
  };
};
