import { ErrorBoundary } from "react-error-boundary";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const withErrorHandling = (Component, Fallback) => {
  const ComponentWithErrorHandling = (props) => {
    return (
      <ErrorBoundary FallbackComponent={Fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  ComponentWithErrorHandling.displayName = `withErrorHandling(${getDisplayName(
    Component
  )})`;

  return ComponentWithErrorHandling;
};

export default withErrorHandling;
