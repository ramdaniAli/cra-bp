import React, { Fragment } from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { ClearAllRounded, MarkChatReadRounded } from "@mui/icons-material";
import { mark, purge } from "app/redux/actions/notification.actions";

const HistoryNotificationActions = ({
  notifications,
  unreadCount,
  showUnreadOnly,
}) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <IconButton
        disabled={
          !notifications.length || (unreadCount === 0 && showUnreadOnly)
        }
        onClick={() => dispatch(purge())}
      >
        <ClearAllRounded />
      </IconButton>

      <IconButton
        disabled={
          !notifications.length || (unreadCount === 0 && showUnreadOnly)
        }
        onClick={() => dispatch(mark())}
      >
        <MarkChatReadRounded />
      </IconButton>
    </Fragment>
  );
};

export default HistoryNotificationActions;
