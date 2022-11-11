const sharedTheme = {
  direction: "rtl",
  typography: {
    fontFamily: [
      "Helvetica",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    // },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: "80%",
        },
      },
    },
  },
}; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes = {
  light: {
    ...sharedTheme,
    palette: {
      mode: "light",
      background: {
        default: "#fafafa",
        paper: "#fff",
      },
    },
  },

  dark: {
    ...sharedTheme,
    palette: {
      mode: "dark",
      background: {
        default: "#111",
        paper: "#171717",
      },
    },
  },
};

export default themes;
