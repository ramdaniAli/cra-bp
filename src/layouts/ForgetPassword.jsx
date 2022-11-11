import { Container, Stack } from "@mui/material";
import ForgetPassword from "components/forms/auth/ForgetPassword";
import React from "react";

const ForgetPasswordLayout = () => {
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
        <ForgetPassword />
      </Stack>
    </Container>
  );
};

export default ForgetPasswordLayout;
