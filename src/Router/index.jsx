import { createBrowserRouter } from "react-router-dom";

// * Layout => Mmmm... this Father Main from All Data
import Layout from "../layout";

// ! Sources
import Error from "../Components/Error";

// * Pages
import AboutMe from "../Components/AboutMe";

// todo: ROUTER LOCATIONS HERE...

let Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: Error,
    children: [
      {
        index: true,
        Component: AboutMe,
      },
    ],
  },
]);

export default Router;
