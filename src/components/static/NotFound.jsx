import React from "react";
import assets from "assets";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/button/CustomButton";
import { routes_list } from "routes";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <img src={assets.images.notFound} alt="not found" />
        <CustomButton
          onClick={() => navigate(routes_list.index)}
          text="Go back to home"
        />
      </Stack>
    </Container>
  );
};

export default NotFound;
