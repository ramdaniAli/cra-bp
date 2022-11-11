import React from "react";

import { useNavigate } from "react-router-dom";

import { AppBar, Box, Toolbar, Button, Stack } from "@mui/material";

import AccountMenu from "components/navigation/AccountMenu";

import ElevationScroll from "components/navigation/ElevationScroll";
import AuthMiddleware from "middlewares/AuthMiddleware";
import GuestMiddleware from "middlewares/GuestMiddleware";
import { routes_list } from "routes";
import Notifier from "components/notifications/Notifier";

import DevMiddleware from "middlewares/DevMiddleware";
import NotificationTestButton from "components/notifications/NotificationTestButton";
import ThemeSwitch from "theme/ThemeSwitch";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Button
                  color="inherit"
                  onClick={() => navigate(routes_list.index)}
                  // sx={{ flexGrow: 1 }}
                >
                  LOGO
                </Button>

                <DevMiddleware>
                  <NotificationTestButton />
                </DevMiddleware>
              </Stack>
            </Box>

            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <AuthMiddleware should_redirect={false}>
                <Notifier />
              </AuthMiddleware>

              <Button
                color="inherit"
                onClick={() => navigate(routes_list.index)}
              >
                HOME
              </Button>

              <ThemeSwitch />

              <AuthMiddleware should_redirect={false}>
                <AccountMenu />
              </AuthMiddleware>

              <GuestMiddleware should_redirect={false}>
                <Button
                  color="inherit"
                  onClick={() => navigate(routes_list.signin)}
                >
                  Login
                </Button>
              </GuestMiddleware>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
    </Box>
  );
};

export default NavBar;
