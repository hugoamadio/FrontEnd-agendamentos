import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])

function AppRoutes(){
    return <RouterProvider router={routes}/>
}

export default AppRoutes