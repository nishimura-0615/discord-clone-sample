import { FallbackProps } from "react-error-boundary"

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p> Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}> Try Again </button>
    </div>
  );
};
