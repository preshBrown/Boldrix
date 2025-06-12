import { loginActions } from "./loginSlice";

export const logIn = (postData) => {
  return (dispatch) => {
    console.log("API Block");
    dispatch(loginActions.startOperation());

    const submitData = async () => {
      const formValue = {
        ...postData,
      };
      console.log(postData);

      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        console.log("DATA" + data.post);
        dispatch(
          loginActions.operationSuccessful({
            userId: data.userId,
            email: data.email,
            status: data.status,
            message: data.message,
            token: data.token,
          })
        );
      } catch (err) {
        console.log("CATCH error block" + err.message);
        dispatch(loginActions.operationFailed(err.message));
      }

      // const data =   {
      //   userId: '6718844e49e9880d4d91d0b5',
      //   email: 'preciousebere090@gmail.com',
      //   status: 'User',
      //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzE4ODQ0ZTQ5ZTk4ODBkNGQ5MWQwYjUiLCJlbWFpbCI6InByZWNpb3VzZWJlcmUwOTBAZ21haWwuY29tIiwic3RhdHVzIjoiVXNlciIsImlhdCI6MTczMDEzMTI5MCwiZXhwIjoxNzMwMTM0ODkwfQ.EYLWMpcLgk2bjF_eNzsnjJAYf7UuulC6SBZlolBOJjQ',
      //   message: 'Login Successful!'
      // }
      // dispatch( loginActions.operationSuccessful(data))
    };
    submitData();
  };
};

export const closeError = () => {
  return (dispatch) => {
    dispatch(loginActions.resetError());
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    dispatch(loginActions.authCheck());
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(loginActions.authLogout());
  };
};


