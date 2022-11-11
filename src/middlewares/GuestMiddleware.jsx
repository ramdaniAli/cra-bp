import { userSelector } from "app/redux/selectors/auth.selector";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const GuestMiddleware = ({ children, should_redirect = true }) => {
  const authState = useSelector(userSelector);
  const { user } = authState;
  const location = useLocation();

  if (Object.keys(user).length > 0) {
    return should_redirect ? (
      <Navigate to="/" state={{ from: location }} replace />
    ) : null;
  }

  return children;
};

export default GuestMiddleware;
