import React, { Fragment } from "react";
import { ClearRounded } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
} from "@mui/material";

const HistoryNotificationCenterHeader = ({
  toggleFilter,
  showUnreadOnly,
  toggleNotificationCenter,
  switchLabel = "Show unread only",
  switchVariant = "primary",
}) => {
  return (
    <Fragment>
      <IconButton onClick={toggleNotificationCenter}>
        <ClearRounded />
      </IconButton>

      <Box sx={{ flexGrow: 1 }} />

      <FormGroup sx={{ color: "inherit" }}>
        <FormControlLabel
          control={
            <Switch
              color={switchVariant}
              onChange={toggleFilter}
              checked={showUnreadOnly}
            />
          }
          label={switchLabel}
        />
      </FormGroup>
    </Fragment>
  );
};

export default HistoryNotificationCenterHeader;
