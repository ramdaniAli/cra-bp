import { createSelector } from "reselect";

const selectUserConsent = (state) => state.cookieConsent.consent;

export const userConsentSelector = createSelector(
  [selectUserConsent],
  (consent) => consent
);
