import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NotFound from "@/components/errors/NotFound";
import ErrorFallback from "@/components/errors/ErrorFallback";

// Error de ruta: si es 404 muestra NotFound, si es otro error muestra ErrorFallback
const RouteError = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  if (import.meta.env.DEV) console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink p-6">
      <ErrorFallback
        name="La página"
        onRetry={() => window.location.reload()}
      />
    </div>
  );
};

export default RouteError;
