import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSignedUp:false,
  loading: false,
  error: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    startOperation(state, actions) {
        state.loading = true
    },
    operationSuccessful(state, actions) {
        state.isSignedUp = true
        state.loading = false
        state.error = ""
    },
    operationFaild(state, actions) {
        state.loading = false
        state.error = actions.payload
    },
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer