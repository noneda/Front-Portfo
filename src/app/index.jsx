import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import LanguageProvider from "@/contexts/Language";
import Router from "@/app/router";

const App = () => (
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={Router} />
    </LanguageProvider>
  </StrictMode>
);

export default App;
