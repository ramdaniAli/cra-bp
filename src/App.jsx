import React, { Fragment } from "react";
import RoutesSwitch from "routes";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";

import AppErrorBoundaryFallback from "app/error_handling/AppErrorBoundaryFallback";
import withErrorHandling from "app/error_handling";
import CookieConsentBanner from "components/CookieConsentBanner";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <RoutesSwitch />
      <ToastContainer
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="light"
        rtl={false}
        limit={3}
        autoClose={5000}
      />
      <CookieConsentBanner
        title="We use cookies"
        message="This site use cookies to offer you a better browsing experience."
        acceptButtonLabel="Accept cookies"
      />
    </Fragment>
  );
}

export default withErrorHandling(App, AppErrorBoundaryFallback);
