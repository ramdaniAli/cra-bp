const isDevMode =
  process.env.REACT_APP_NODE_ENV !== "prod" &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default isDevMode;
