const ErrorFallback = ({ name = "Esta sección", onRetry }) => (
  <div
    role="alert"
    className="mx-auto my-10 max-w-md border-2 border-ink bg-lime p-6 text-center text-ink"
  >
    <p className="font-display uppercase">{name} no se pudo cargar.</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-4 border-2 border-ink px-4 py-1 text-sm font-bold uppercase hover:bg-ink hover:text-lime"
      >
        Reintentar
      </button>
    )}
  </div>
);

export default ErrorFallback;
