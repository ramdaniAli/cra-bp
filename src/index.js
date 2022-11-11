import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "utils/reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "app/redux/store";
import { BrowserRouter } from "react-router-dom";
import { analyticLogger } from "app/redux/actions/analytic.actions";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import App from "App";
import isDevMode from "utils/isDevMode";
import welcome from "utils/welcome";
import { HelmetProvider } from "react-helmet-async";
import AppThemeProvider from "theme/AppThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cache = createCache({
  key: "css",
  prepend: true,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CacheProvider value={cache}>
            <HelmetProvider>
              <AppThemeProvider>
                <App />
              </AppThemeProvider>
            </HelmetProvider>
          </CacheProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//(metrics) => store.dispatch(analyticLogger(metrics))
reportWebVitals(isDevMode && analyticLogger);

//It's a function that logs a message to the console.
welcome();
