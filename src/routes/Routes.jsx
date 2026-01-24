import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json")
            },
        ]
    },
    {
        path: '/auth',
        element: <h2>This is Auth layout</h2>
    },
    {
        path: '/register',
        element: <h2>This is register layout</h2>
    },
    {
        path: '/news',
        element: <h2>This is news layout</h2>
    },
    {
        path: '/*',
        element: <h2>ERROR - 404</h2>
    },

])