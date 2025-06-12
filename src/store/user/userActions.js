import { userActions } from "./userSlice";

export const getUserData = (id, token) => {
  console.log("🚀 ~ getUserData ~ id:", id)
  console.log("🚀 ~ getUserData ~ token:", token)
  return (dispatch) => {
    dispatch(userActions.startOperation());

    const processReq = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/profile/${id}`,
          { 
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token 
            },
            }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        dispatch(userActions.getUserSuccessful({ user: { ...data.user } }));
      } catch (err) {
        dispatch(userActions.operationFailed(err.message));
      }
    };
    processReq();
  };
};

export const onForgotPassword = (email) => {
  return (dispatch) => {
    dispatch(userActions.startOperation());
    const check  = JSON.stringify({...email})
    console.log("🚀 ~ onForgotPassword ~ check:", check)
    const processReq = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...email}),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        dispatch(userActions.operationSuccessful(data.message))
      } catch (err) {
        dispatch(userActions.operationFailed(err.message));
      }
    };
    processReq();
  };
};


export const onResetPassword = (id, token, updatedPassword) => {
  return (dispatch) => {
    dispatch(userActions.startOperation());
    
    const processReq = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/reset-password/${id}/${token}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...updatedPassword}),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
          console.log("🚀 ~ processReq ~ data.message:", data.message)

        dispatch(userActions.operationSuccessful(data.message));
      } catch (err) {
        dispatch(userActions.operationFailed(err.message));
      }
    };
    processReq();
  };
};

export const closeUserError = () => {
  return (dispatch) => {
    dispatch(userActions.resetUserError());
  };
};
