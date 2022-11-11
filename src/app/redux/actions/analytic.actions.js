import { logMetrics } from "app/redux/reducers/analytic.reducer";
import store from "app/redux/store";

export const analyticLogger = ({ id, name, value }) => {
  store.dispatch(
    logMetrics({
      eventCategory: "Web Vitals",
      eventAction: name,
      eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
    })
  );
};
