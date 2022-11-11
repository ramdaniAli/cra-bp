import React from "react";
import assets from "assets";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/button/CustomButton";
import { routes_list } from "routes";
import { RenderAfter } from "react-haiku";

const NoData = ({
  text,
  illustration = assets.images.noData,
  textColor = "primary",
  btnText = "Go back home",
  withBtnRedirect = true,
  redirectUrl = routes_list.index,
}) => {
  const navigate = useNavigate();
  return (
    <RenderAfter delay={5000}>
      <Container maxWidth="sm">
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <img src={illustration} alt="not data" />
          <Typography variant="h6" color={textColor} gutterBottom>
            {text}
          </Typography>
          {withBtnRedirect && (
            <CustomButton
              onClick={() => navigate(redirectUrl)}
              text={btnText}
            />
          )}
        </Stack>
      </Container>
    </RenderAfter>
  );
};

export default NoData;
