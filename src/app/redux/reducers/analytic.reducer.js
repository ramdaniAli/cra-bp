import { createSlice } from "@reduxjs/toolkit";

const analyticSlice = createSlice({
  name: "analytic",
  initialState: {
    metrics: [],
  },
  reducers: {
    logMetrics(state, action) {
      state.metrics = [...state.metrics, action.payload];
    },
  },
});

export const { logMetrics } = analyticSlice.actions;

export default analyticSlice.reducer;
