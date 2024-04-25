import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";

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
            }
        ]
    },
]);


export default router;