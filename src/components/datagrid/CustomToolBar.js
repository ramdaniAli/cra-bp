import React from "react";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useMediaQuery } from "@mui/material";

function CustomToolbar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
      {!isMobile && <GridToolbarFilterButton />}
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
