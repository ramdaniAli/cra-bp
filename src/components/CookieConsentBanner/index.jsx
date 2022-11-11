import React, { Children, cloneElement, useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  Zoom,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userConsentSelector } from "app/redux/selectors/cookieConsent.selector";
import { accept, reject } from "app/redux/reducers/cookieConsent.reducer";
import { CloseRounded } from "@mui/icons-material";

const CookieConsentBanner = (props) => {
  const {
    componentType = "Snackbar",
    message = "I love cookies!",
    title = "Cookies consent !",
    acceptButtonLabel = "Accept",
    rejectButtonLabel = "Reject",
    debug = false,
    hideOnAccept = true,
    hideOnReject = true,
    snackbarAnchor = {
      horizontal: "center",
      vertical: "bottom",
    },
    children = null,
    actions = null,
    onAccept = () => dispatch(accept()),
    onReject = () => dispatch(reject()),
  } = props;

  const dispatch = useDispatch();

  const [visible, setvisible] = useState(false);

  const userConsent = useSelector(userConsentSelector);

  useEffect(() => {
    if (debug || !userConsent) {
      setvisible(true);
    }
  }, [debug, userConsent]);

  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }

    if (hideOnAccept) {
      setvisible(false);
    }
  };

  const handleReject = () => {
    if (onReject) {
      onReject();
    }
    if (hideOnReject) {
      setvisible(false);
    }
  };

  const childrenWithProps = Children.map((children, child) =>
    cloneElement(child, { onAccept: handleAccept, onReject: handleReject })
  );

  switch (componentType) {
    case "Snackbar":
      return children ? (
        <Snackbar
          TransitionComponent={Zoom}
          anchorOrigin={snackbarAnchor}
          open={visible}
        >
          {childrenWithProps}
        </Snackbar>
      ) : (
        <Snackbar
          TransitionComponent={Zoom}
          anchorOrigin={snackbarAnchor}
          open={visible}
          message={<span id="message-id">{message}</span>}
          action={[
            ...React.Children.toArray(actions),
            <Button
              key="accept"
              color="primary"
              size="small"
              onClick={handleAccept}
            >
              {acceptButtonLabel}
            </Button>,
            <IconButton
              key="reject"
              color="error"
              size="small"
              onClick={handleReject}
            >
              <CloseRounded />
            </IconButton>,
          ]}
        />
      );
    case "Dialog":
      return children ? (
        <Dialog open={visible}>{childrenWithProps}</Dialog>
      ) : (
        <Dialog open={visible}>
          {title && <DialogTitle>{title}</DialogTitle>}

          <DialogContent>
            <DialogContentText id="alert-dialog-description" component="div">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {actions}
            <Button onClick={handleAccept} color="primary">
              {acceptButtonLabel}
            </Button>
            <Button onClick={handleReject} color="error">
              {rejectButtonLabel}
            </Button>
          </DialogActions>
        </Dialog>
      );
    default:
      return null;
  }
};

export default CookieConsentBanner;
