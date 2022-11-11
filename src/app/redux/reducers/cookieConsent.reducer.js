import { createSlice } from "@reduxjs/toolkit";

const cookieConsentSlice = createSlice({
  name: "cookieConsent",
  initialState: {
    consent: false,
  },
  reducers: {
    accept: (state) => {
      state.consent = true;
    },
    reject: (state) => {
      state.consent = false;
    },
  },
});

export const { accept, reject } = cookieConsentSlice.actions;

export default cookieConsentSlice.reducer;
