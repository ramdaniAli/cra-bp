import { toggle , selectTheme } from "app/redux/reducers/theme.reducer";

export const toggleTheme = (mode) => (dispatch) => {
  if (mode === undefined) {
    dispatch(toggle());
  } else {
    dispatch(
      selectTheme({
        mode,
      })
    );
  }
};
