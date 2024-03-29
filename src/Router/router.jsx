import { createBrowserRouter } from "react-router-dom";

// * Pages
import Home from '../Pages/home'
// ! Sources

// todo: ROUTER LOCATIONS HERE...

const Router = createBrowserRouter([
    {
        path:"/Portafo",
        element : <Home/>,
/*
        errorElement: <h1>ERROR</h1>,

        children: [
            {
                index: true,
                element: <h1>Hello Word!    </h1>
            }
        ]
*/
    }
])


export default Router;