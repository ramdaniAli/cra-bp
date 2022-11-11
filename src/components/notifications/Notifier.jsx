import { NotificationsRounded } from "@mui/icons-material";
import { Badge, IconButton, useMediaQuery } from "@mui/material";
import { notificationSelector } from "app/redux/selectors/notification.selector";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import NotificationCenterPopover from "components/notifications/NotificationCenterPopover";
import NoficaitionCenterDialog from "components/notifications/NotificationCenterDialog";

const Notifier = () => {
  const notificationState = useSelector(notificationSelector);
  const { notifications } = notificationState;

  const unreadCount = notifications?.filter(
    (elmt) => elmt.read === false
  )?.length;

  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isDownSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleNotificationCenter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const toggleFilter = (e) => {
    setShowUnreadOnly(!showUnreadOnly);
  };

  const id = isOpen ? "simple-popover" : undefined;

  return (
    <Fragment>
      <IconButton aria-describedby={id} onClick={toggleNotificationCenter}>
        <Badge badgeContent={unreadCount} color="secondary">
          <NotificationsRounded />
        </Badge>
      </IconButton>

      {isDownSm ? (
        <NoficaitionCenterDialog
          isOpen={isOpen}
          toggleFilter={toggleFilter}
          showUnreadOnly={showUnreadOnly}
          toggleNotificationCenter={toggleNotificationCenter}
          notifications={notifications}
          unreadCount={unreadCount}
        />
      ) : (
        <NotificationCenterPopover
          isOpen={isOpen}
          id={id}
          anchorEl={anchorEl}
          toggleFilter={toggleFilter}
          showUnreadOnly={showUnreadOnly}
          toggleNotificationCenter={toggleNotificationCenter}
          notifications={notifications}
          unreadCount={unreadCount}
        />
      )}
    </Fragment>
  );
};

export default Notifier;
