import React from "react";
import { Box, Popover, Stack, Zoom } from "@mui/material";

import { styled } from "@mui/material/styles";
import NoData from "components/static/NoData";
import HistoryNotificationActions from "components/notifications/HistoryNotificationActions";
import HistoryNotificationItem from "components/notifications/HistoryNotificationItem";
import HistoryNotificationCenterHeader from "components/notifications/HistoryNotificationCenterHeader";

const NotificationCenterPopover = ({
  id,
  isOpen,
  anchorEl,
  toggleFilter,
  showUnreadOnly,
  toggleNotificationCenter,
  notifications,
  unreadCount,
}) => {
  return (
    <CustomPopover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={toggleNotificationCenter}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Zoom}
      transitionDuration={350}
      elevation={16}
      marginThreshold={20}
    >
      <PopoverHeader
        toggleFilter={toggleFilter}
        showUnreadOnly={showUnreadOnly}
        toggleNotificationCenter={toggleNotificationCenter}
      />

      <NotificationHistory
        notifications={notifications}
        unreadCount={unreadCount}
        showUnreadOnly={showUnreadOnly}
      />
      <PopoverActions
        notifications={notifications}
        unreadCount={unreadCount}
        showUnreadOnly={showUnreadOnly}
      />
    </CustomPopover>
  );
};

export default NotificationCenterPopover;

const PopoverHeader = ({
  toggleFilter,
  showUnreadOnly,
  toggleNotificationCenter,
  switchLabel = "Show unread only",
  switchVariant = "primary",
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        p: "8px",
      }}
    >
      <HistoryNotificationCenterHeader
        toggleFilter={toggleFilter}
        showUnreadOnly={showUnreadOnly}
        toggleNotificationCenter={toggleNotificationCenter}
        switchLabel={switchLabel}
        switchVariant={switchVariant}
      />
    </Stack>
  );
};

const NotificationHistory = ({
  notifications,
  unreadCount,
  showUnreadOnly,
}) => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        // maxHeight: "370px",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
        wordBreak: "keep-all",
      }}
    >
      <Stack
        sx={{
          height: "400px",
          width: "min(50ch, 100ch)",
          padding: "12px",
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

const PopoverActions = ({ notifications, unreadCount, showUnreadOnly }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        p: "8px",
      }}
    >
      <HistoryNotificationActions
        notifications={notifications}
        unreadCount={unreadCount}
        showUnreadOnly={showUnreadOnly}
      />
    </Stack>
  );
};

const CustomPopover = styled(Popover)`
  & .MuiPopover-paper {
    /* background: rgba(255, 255, 255, 0.71); */
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
