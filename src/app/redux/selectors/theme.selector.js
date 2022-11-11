import { createSelector } from "reselect";

const selectTheme = (state) => state.theme.mode;

export const themeSelector = createSelector([selectTheme], (mode) => mode);
