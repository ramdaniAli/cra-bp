import { createSelector } from "reselect";

const selectNotification = (state) => state.notification;

export const notificationSelector = createSelector(
  [selectNotification],
  (notificationSlice) => notificationSlice
);
