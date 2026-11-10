import { createBrowserRouter, redirect } from "react-router-dom";

import RouteError from "@/components/errors/RouteError";
import {
  SUPPORTED_LANGUAGES,
  getInitialLanguage,
} from "@/contexts/Language/hook";

// * Page
import Home from "@/pages/home";

const Router = createBrowserRouter([
  {
    ErrorBoundary: RouteError,
    children: [
      {
        // "/" -> "/es" o "/en" (idioma guardado, del navegador o español)
        index: true,
        loader: () => redirect(`/${getInitialLanguage()}`),
      },
      {
        // "/es" y "/en" -> la página; "/fr", "/xyz"... -> 404
        path: ":lang",
        loader: ({ params }) => {
          if (!SUPPORTED_LANGUAGES.includes(params.lang)) {
            throw new Response("Not Found", { status: 404 });
          }
          return null;
        },
        Component: Home,
      },
    ],
  },
]);

export default Router;
