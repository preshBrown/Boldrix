import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  authDropdown: false
};

const uiSlice = createSlice({
  name: "uiStates",
  initialState,
  reducers: {
    toggleTheme(state, actions) {
        const updatedTheme = state.theme === "light" ? "dark" : "light";
        state.theme = updatedTheme;
        localStorage.setItem("Theme", updatedTheme)

    },

    setTheme(state, actions) {
      state.theme = actions.payload;
      localStorage.setItem("Theme", actions.payload)

    },

    openAuthDropdown (state,actions) {
      console.log("slice-Reached");
      state.authDropdown = !state.authDropdown
      // state.authDropdown = true
      console.log(state.authDropdown);
    },
    closeAuthDropdown (state,actions) {
      console.log("slice-ReachedClose");
      state.authDropdown = false
      console.log(state.authDropdown);
    }
  },


});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
