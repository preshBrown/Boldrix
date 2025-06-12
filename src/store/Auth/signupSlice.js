import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedUp: false,
  loading: false,
  message: "",
  error: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    startOperation(state, actions) {
      state.loading = true;
    },
    operationSuccessful(state, actions) {
      state.message = actions.payload;
      state.isSignedUp = true;
      state.loading = false;
      state.error = "";
    },
    operationFaild(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },

    resetSignUpError (state, actions) {
      state.error = "";
    },
    resetIsSignUp (state, actions) {
      state.isSignedUp = false;
    },
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;
