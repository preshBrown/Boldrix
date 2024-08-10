import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
