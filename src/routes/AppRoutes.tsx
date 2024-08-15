import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        // errorElement: <Error/>
    }
])

function AppRoutes(){
    return <RouterProvider router={routes}/>
}

export default AppRoutes