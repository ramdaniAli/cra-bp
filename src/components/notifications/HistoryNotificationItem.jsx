import React from "react";
import { CheckRounded, MarkChatReadRounded } from "@mui/icons-material";
import { Alert, AlertTitle, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { mark } from "app/redux/actions/notification.actions";
import { formatRelative, subDays } from "date-fns";
import { enUS } from "date-fns/locale";

const HistoryNotificationItem = ({ notification }) => {
  const dispatch = useDispatch();
  return (
    <Alert
      elevation={1}
      severity={
        notification?.type && notification?.type !== "default"
          ? notification.type
          : "info"
      }
      action={
        notification.read ? (
          <CheckRounded />
        ) : (
          <IconButton
            aria-label="mark as read"
            component="span"
            size="small"
            // color="primary"
            onClick={() => dispatch(mark(notification.toastId))}
          >
            <MarkChatReadRounded />
          </IconButton>
        )
      }
    >
      <AlertTitle>{notification.message}</AlertTitle>
      <Typography variant="caption">
        {formatRelative(subDays(new Date(), 3), new Date(), {
          locale: enUS,
        })}
      </Typography>
    </Alert>
  );
};

export default HistoryNotificationItem;
