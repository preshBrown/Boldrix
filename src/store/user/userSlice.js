import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  message: "",
  status: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startOperation(state, actions) {
      state.loading = true;
    },

    getUserSuccessful (state, actions) {
      state.loading = false;
      state.user = actions.payload.user;
    },
    operationSuccessful (state, actions) {
      state.loading = false;
      state.message = actions.payload;
    },

    operationFailed(state, actions) {
      state.loading = false;
      state.error = actions.payload;
    },

    resetUserError (state, actions) {
      state.error = "";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
