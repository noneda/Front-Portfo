import { Link } from "react-router-dom";
import { useNotFoundHook } from "./hook";

const NotFound = () => {
  const { containerRef, goBack } = useNotFoundHook();

  return (
    <main
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center gap-4 text-center"
    >
      <h1 className="nf-code text-8xl font-bold">404</h1>
      <p className="nf-text text-xl">Esta página no existe.</p>
      <div className="nf-text flex gap-3">
        <button onClick={goBack} className="rounded-lg border px-4 py-2">
          Volver
        </button>
        <Link to="/" className="rounded-lg bg-black px-4 py-2 text-white">
          Ir al inicio
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
