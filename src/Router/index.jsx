import { createBrowserRouter } from "react-router-dom";

// * Layout => Mmmm... this Father Main from All Data
import Layout from "../layout";

// ! Sources
import Error from "../Components/Error";

// * Pages
import Home from "../App/Home";

// todo: ROUTER LOCATIONS HERE...

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default Router;
