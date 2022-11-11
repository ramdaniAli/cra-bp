import { combineReducers } from "redux";
import authReducer from "app/redux/reducers/auth.reducer";

import analyticReducer from "app/redux/reducers/analytic.reducer";
import notificationReducer from "app/redux/reducers/notification.reducer";
import themeReducer from "app/redux/reducers/theme.reducer";
import cookieConsentReducer from "app/redux/reducers/cookieConsent.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["analytics", "notification", "theme", "cookieConsent"],
};

const userPersistConfig = {
  key: "user",
  storage: new CookieStorage(Cookies, {
    expiration: {
      default: 365 * 86400, // Cookies expire after one year
    },
  }),
};

const rootReducer = combineReducers({
  analytics: analyticReducer,
  auth: persistReducer(userPersistConfig, authReducer),
  notification: notificationReducer,
  cookieConsent: cookieConsentReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
