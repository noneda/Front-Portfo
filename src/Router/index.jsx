import { createBrowserRouter } from "react-router-dom";

// * Layout => Mmmm... this Father Main from All Data
import Layout from "../layout";

// ! Sources
import Error from "../Components/Error";

// * Pages
import AboutMe from "../Components/AboutMe";

import Home from "../App/Home";

// todo: ROUTER LOCATIONS HERE...

let Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default Router;
