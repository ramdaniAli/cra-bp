import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {
    loadingRequest: (state) => {
      state.loading = true;
    },
    signIn: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    signOut: (state) => {
      state.user = {};
      state.loading = false;
    },
    resetPassword: (state) => {
      state.loading = false;
    },
    logError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signIn, signOut, logError, loadingRequest, resetPassword } =
  authSlice.actions;

export default authSlice.reducer;
