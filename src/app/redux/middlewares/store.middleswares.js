// import Raven from "raven-js";
import * as Sentry from "@sentry/browser";

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = (store) => (next) => (action) => {
  console.group("🔥", action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const round = (number) => Math.round(number * 100) / 100;

/**
 * An enhancer which logs the time taken for the reducers to process each action.
 * It's a function that takes a function that takes a function that takes a function that returns a
 * function that returns a function that returns a function.
 * @param createStore - The original createStore function
 * @returns A function that takes a reducer, initialState, and enhancer and returns a store.
 */
export const monitorReducerEnhancer =
  (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log("⏲️ reducer process time:", diff);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState(),
    //   },
    // });
    Sentry.withScope((scope) => {
      scope.setExtra("action", action);
      scope.setExtra("state", store.getState());
      Sentry.captureException(err);
    });
    throw err;
  }
};

/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
export const thunk = (store) => (next) => (action) =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
export const timeoutScheduler = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }

  const timeoutId = setTimeout(() => next(action), action.meta.delay);

  return function cancel() {
    clearTimeout(timeoutId);
  };
};

/**
 * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF loop
 * frame.  Makes `dispatch` return a function to remove the action from the queue in
 * this case.
 */
export const rafScheduler = (store) => (next) => {
  let queuedActions = [];
  let frame = null;

  function loop() {
    frame = null;
    try {
      if (queuedActions.length) {
        next(queuedActions.shift());
      }
    } finally {
      maybeRaf();
    }
  }

  function maybeRaf() {
    if (queuedActions.length && !frame) {
      frame = requestAnimationFrame(loop);
    }
  }

  return (action) => {
    if (!action.meta || !action.meta.raf) {
      return next(action);
    }

    queuedActions.push(action);
    maybeRaf();

    return function cancel() {
      queuedActions = queuedActions.filter((a) => a !== action);
    };
  };
};

/**
 * Lets you dispatch promises in addition to actions.
 * If the promise is resolved, its result will be dispatched as an action.
 * The promise is returned from `dispatch` so the caller may handle rejection.
 */
export const vanillaPromise = (store) => (next) => (action) => {
  if (typeof action.then !== "function") {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
export const readyStatePromise = (store) => (next) => (action) => {
  if (!action.promise) {
    return next(action);
  }

  function makeAction(ready, data) {
    const newAction = Object.assign({}, action, { ready }, data);
    delete newAction.promise;
    return newAction;
  }

  next(makeAction(false));
  return action.promise.then(
    (result) => next(makeAction(true, { result })),
    (error) => next(makeAction(true, { error }))
  );
};
