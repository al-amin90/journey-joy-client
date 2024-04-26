import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import SingIn from "../Pages/SingIn/SingIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/addSpot",
                element: <AddSpot></AddSpot>
            },
            {
                path: "/singIn",
                element: <SingIn></SingIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);


export default router;