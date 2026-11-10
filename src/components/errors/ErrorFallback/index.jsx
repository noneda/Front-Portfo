const ErrorFallback = ({ name = "Esta sección", onRetry }) => (
  <div
    role="alert"
    className="rounded-lg border border-red-200 bg-red-50 p-6 text-center"
  >
    <p className="font-bold text-red-800">{name} no se pudo cargar.</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-3 rounded-lg border border-red-300 px-4 py-1 text-red-800"
      >
        Reintentar
      </button>
    )}
  </div>
);

export default ErrorFallback;
