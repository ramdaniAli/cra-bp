import { userSelector } from "app/redux/selectors/auth.selector";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthMiddleware = ({ children, should_redirect = true }) => {
  const authState = useSelector(userSelector);
  const { user } = authState;

  const location = useLocation();

  if (Object.keys(user).length > 0) {
    return children;
  }

  return should_redirect ? (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  ) : null;
};

export default AuthMiddleware;
