import { Box, Typography } from "@mui/material";

function LoaderErrorBoundaryFallback() {
  return (
    <Box>
      <Typography variant="h5">
        Something went wrong while loading the app !
      </Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
