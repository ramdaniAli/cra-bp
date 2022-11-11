import isDevMode from "utils/isDevMode";

const DevMiddleware = ({ children }) => {
  return isDevMode ? children : null;
};

export default DevMiddleware;
