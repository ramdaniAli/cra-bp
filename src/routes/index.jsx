import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SignInLayout from "layouts/SignIn";
import GuestMiddleware from "middlewares/GuestMiddleware";
import NotFound from "components/static/NotFound";
import CustomLoader from "components/loaders/CustomLoader";
import ForgetPasswordLayout from "layouts/ForgetPassword";

const MainLayout = lazy(() => import("layouts/main"));

export const routes_list = {
  index: "/",
  signin: "/sign-in",
  forget_password: "/forget-password",
};

const RoutesSwitch = () => {
  return (
    <Routes>
      <Route
        path={routes_list.index}
        element={
          <Suspense fallback={<CustomLoader />}>
            <MainLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <GuestMiddleware>
              <SignInLayout />
            </GuestMiddleware>
          }
        />

        <Route
          path={routes_list.signin}
          element={
            <GuestMiddleware>
              <SignInLayout />
            </GuestMiddleware>
          }
        />

        <Route
          path={routes_list.forget_password}
          element={
            <GuestMiddleware>
              <ForgetPasswordLayout />
            </GuestMiddleware>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesSwitch;
