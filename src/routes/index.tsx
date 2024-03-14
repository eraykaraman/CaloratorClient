import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Metric from "../pages/Metric";
import Recipe from "../pages/Recipes";
import Faq from "../pages/Faq";

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
        path: "/metric/:id",
        element: <Metric/>,
    },
    {
        path: "/tarifler",
        element: <Recipe/>,
    },
    {
        path: "*",
        element: <NotFound />,
    },
  ]);
  
  export default routes;