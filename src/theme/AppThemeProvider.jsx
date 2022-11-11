import React from "react";
import { themeSelector } from "app/redux/selectors/theme.selector";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import themes from "theme";
import { frFR } from "@mui/material/locale";

// import "react-toastify/dist/ReactToastify.css";
// import "theme/styles/toast/main.scss";
import "theme/index.scss";

const AppThemeProvider = ({ children }) => {
  const mode = useSelector(themeSelector);
  const theme = responsiveFontSizes(createTheme(themes[mode], frFR));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
