import React from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { EmailRounded, RestartAltRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import resetApp from "utils/resetApp";

function AppErrorBoundaryFallback() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        height: "100vh",
        background:
          "linear-gradient(167deg, rgba(7,1,1,0.45) 0%, rgba(0,0,0,0.75) 100%)",
      }}
    >
      <CustomPaper elevation={12} sx={{ p: 5, textAlign: "center" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5">Something went wrong 💀</Typography>
          <Button
            startIcon={<EmailRounded />}
            variant="contained"
            target="_blank"
            rel="noreferrer"
            href={`mailto: ali.ramdani.dz@viacesi.fr`}
            sx={{ my: 3 }}
          >
            Contact the developer
          </Button>
          <Typography variant="h5">or</Typography>
          <Button
            startIcon={<RestartAltRounded />}
            sx={{ mt: 3 }}
            variant="outlined"
            onClick={resetApp}
          >
            Reload the page
          </Button>
        </Stack>
      </CustomPaper>
    </Stack>
  );
}

export default AppErrorBoundaryFallback;

const CustomPaper = styled(Paper)`
  background: linear-gradient(
    167deg,
    rgba(200, 200, 200, 0.1) 0%,
    rgba(255, 255, 255, 0.35) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 8px;
`;
