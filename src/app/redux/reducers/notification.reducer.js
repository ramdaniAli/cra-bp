import { createSlice } from "@reduxjs/toolkit";
import isSet from "utils/isSet";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications = [
        ...state.notifications,
        {
          ...action.payload,
        },
      ];
    },
    clearNotification: (state) => {
      state.notifications = [];
    },
    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (elmt) => elmt.toastId !== action.payload
      );
    },
    markAsRead: (state, action) => {
      const item = state.notifications.find(
        (elmt) => elmt.toastId === action.payload
      );
      if (isSet(item)) {
        item.read = true;
      }
    },
    markAllAsRead: (state) => {
      state.notifications = state.notifications.map((elmt) => ({
        ...elmt,
        read: true,
      }));
    },
  },
});

export const {
  addNotification,
  clearNotification,
  deleteNotification,
  markAllAsRead,
  markAsRead,
} = notificationSlice.actions;

export default notificationSlice.reducer;
