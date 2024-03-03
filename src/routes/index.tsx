import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "*",
        element: <NotFound />,
    },
  ]);
  
  export default routes;