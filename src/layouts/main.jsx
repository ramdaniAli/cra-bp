import { Container } from "@mui/system";
import Meta from "components/meta/Meta";
import NavBar from "components/navigation/NavBar";
import ScrollToTop from "components/navigation/ScrollToTop";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Meta title="Welcome" />
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          my: 4,
        }}
      >
        <Outlet />
      </Container>
      <ScrollToTop />
    </Fragment>
  );
};

export default Layout;
