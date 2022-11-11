import { createSlice } from "@reduxjs/toolkit";
/**
 * @type user
 * @property {string} displayName
 * @property {string} photoURL
 * @property {date} creationTime
 * @property {date} lastSignInTime
 * @property {date} lastLoginAt
 * @property {boolean} emailVerified
 * @property {string} uid
 * @property {string} email
 * @property {date} createdAt
 * @property {string} accessToken
 *
 * @type {boolean} loading
 * @type {any} error
 */
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
