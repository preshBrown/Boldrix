import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loading: false,
  userId: null,
  email: null,
  message: "",
  status: null,
  token: null,
  tokenUiExpirationDate: null,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startOperation(state, actions) {
      state.loading = true;
    },
    operationSuccessful(state, actions) {
      // const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
      const tokenExpirationDate = new Date(new Date().getTime() + 3600000);
      state.tokenUiExpirationDate = tokenExpirationDate;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: actions.payload.userId,
          status: actions.payload.status,
          expiration: tokenExpirationDate.toISOString(),
          token: actions.payload.token,
        })
      );

      const storageData = {
        userId: actions.payload.userId,
        status: actions.payload.status,
        expiration: tokenExpirationDate.toISOString(),
        token: actions.payload.token,
      }
      console.log("🚀 ~ operationSuccessful ~ storageData:", storageData)

      state.userId = actions.payload.userId;
      state.email = actions.payload.email;
      state.status = actions.payload.status;
      state.message = actions.payload.message;
      state.token = actions.payload.token;
      state.isLoggedIn = !!actions.payload.token;
      state.loading = false;
      state.error = "";
    },
    operationFailed(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },

    resetError (state, actions) {
      state.error = "";
    },

    authCheck(state, actions) {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      
      if (
        storedData &&
        storedData.token &&
        new Date(storedData.expiration) > new Date()
        ) {
          
          console.log("🚀 ~ authCheck ~ storedData:", storedData)
        state.tokenUiExpirationDate =  new Date(storedData.expiration);
        state.userId = storedData.userId;
        state.email = storedData.email;
        state.status = storedData.status;
        state.token = storedData.token;
        state.isLoggedIn = !!storedData.token;
      }
    },

    authLogout(state, actions) {
      localStorage.removeItem("userData");
      state.isLoggedIn = false;
      state.userId = false;
      state.email = false;
      state.status = false;
      state.token = null;
      state.tokenUiExpirationDate = null
    },
  },
});
    
export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
