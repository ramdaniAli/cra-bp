import persistedReducer from "app/redux/reducers";
import { persistStore } from "redux-persist";

import {
  logger,
  monitorReducerEnhancer,
  thunk,
} from "app/redux/middlewares/store.middleswares";
import { configureStore } from "@reduxjs/toolkit";
import isDevMode from "utils/isDevMode";

const configureAppStore = (preloadedState) => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: isDevMode,
    middleware: [thunk, isDevMode && logger].filter(Boolean),
    preloadedState,
    enhancers: [isDevMode && monitorReducerEnhancer].filter(Boolean),
  });

  return store;
};

const store = configureAppStore();

export const persistor = persistStore(store);

export default store;
