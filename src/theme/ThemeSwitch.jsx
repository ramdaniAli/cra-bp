import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "app/redux/actions/theme.actions";
import { IconButton, Tooltip } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { themeSelector } from "app/redux/selectors/theme.selector";

const ThemeSwitch = () => {
  const mode = useSelector(themeSelector);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <Tooltip title="Switch theme" arrow>
      <IconButton onClick={handleToggleTheme}>
        {mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;
