import { createBrowserRouter } from "react-router-dom";

// * Layout => Mmmm... this Father Main from All Data
import Layout from "../layout";

// ! Sources
import Error from "../Components/Error";

// * Pages
import About from "../App/About";

// todo: ROUTER LOCATIONS HERE...

let Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: Error,
    children: [
      {
        index: true,
        Component: About,
      },
    ],
  },
]);

export default Router;
