import { toggle } from "app/redux/reducers/theme.reducer";

export const toggleTheme = () => (dispatch) => {
  dispatch(toggle());
};
