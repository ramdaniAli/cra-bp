import React from "react";

import SignIn from "components/forms/auth/SignIn";

import { Container, Stack } from "@mui/material";
import CustomLink from "components/links/CustomLink";
import { routes_list } from "routes";

const SignInLayout = () => {
  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
        sx={{
          width: "100%",
        }}
      >
        <SignIn />
        <CustomLink
          text="Forget passoword ?"
          url={routes_list.forget_password}
        />
      </Stack>
    </Container>
  );
};

export default SignInLayout;
