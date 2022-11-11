import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  Dialog,
  DialogActions,
  Slide,
  Stack,
  Toolbar,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import NoData from "components/static/NoData";

import HistoryNotificationItem from "components/notifications/HistoryNotificationItem";
import HistoryNotificationActions from "components/notifications/HistoryNotificationActions";
import HistoryNotificationCenterHeader from "components/notifications/HistoryNotificationCenterHeader";

const NoficaitionCenterDialog = ({
  isOpen,
  toggleFilter,
  showUnreadOnly,
  toggleNotificationCenter,
  notifications,
  unreadCount,
}) => {
  return (
    <CustomDialog
      fullScreen
      open={isOpen}
      onClose={toggleNotificationCenter}
      TransitionComponent={CustomTransitionSlideDialog}
      aria-labelledby="alert-dialog-slide-notification-center"
      aria-describedby="alert-dialog-slide-notification-center"
    >
      <DialogHeader
        toggleFilter={toggleFilter}
        showUnreadOnly={showUnreadOnly}
        toggleNotificationCenter={toggleNotificationCenter}
      />

      <DialogHistory
        notifications={notifications}
        unreadCount={unreadCount}
        showUnreadOnly={showUnreadOnly}
      />

      <ActionsDialog
        notifications={notifications}
        unreadCount={unreadCount}
        showUnreadOnly={showUnreadOnly}
      />
    </CustomDialog>
  );
};

export default NoficaitionCenterDialog;

const DialogHeader = ({
  toggleFilter,
  showUnreadOnly,
  toggleNotificationCenter,
  switchLabel = "Show unread only",
  switchVariant = "primary",
}) => {
  return (
    <Fragment>
      <AppBar color="transparent" sx={{ position: "relative" }}>
        <Toolbar>
          <HistoryNotificationCenterHeader
            toggleFilter={toggleFilter}
            showUnreadOnly={showUnreadOnly}
            toggleNotificationCenter={toggleNotificationCenter}
            switchLabel={switchLabel}
            switchVariant={switchVariant}
          />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const DialogHistory = ({ notifications, unreadCount, showUnreadOnly }) => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
        wordBreak: "keep-all",
      }}
    >
      <Stack
        sx={{
          padding: "16px",
        }}
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        {(!notifications.length || (unreadCount === 0 && showUnreadOnly)) && (
          <NoData
            text="Your queue is empty! you are all set"
            withBtnRedirect={false}
          />
        )}

        {(showUnreadOnly
          ? notifications.filter((v) => !v.read)
          : notifications
        ).map((notification) => {
          return (
            <HistoryNotificationItem
              key={notification.toastId}
              notification={notification}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

const ActionsDialog = ({ notifications, unreadCount, showUnreadOnly }) => {
  return (
    !(!notifications.length || (unreadCount === 0 && showUnreadOnly)) && (
      <DialogActions>
        <HistoryNotificationActions
          notifications={notifications}
          unreadCount={unreadCount}
          showUnreadOnly={showUnreadOnly}
        />
      </DialogActions>
    )
  );
};

const CustomDialog = styled(Dialog)`
  & .MuiDialog-paper {
    background: linear-gradient(
      167deg,
      rgba(200, 200, 200, 0.75) 0%,
      rgba(255, 255, 255, 0.75) 100%
    );
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
  }
`;

const CustomTransitionSlideDialog = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
