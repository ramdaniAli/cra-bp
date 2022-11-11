import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // mode can be "light" or "dark"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    selectTheme: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { toggle, selectTheme } = themeSlice.actions;

export default themeSlice.reducer;
