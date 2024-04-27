import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import SingIn from "../Pages/SingIn/SingIn";
import Register from "../Pages/Register/Register";
import Loader from "../Utils/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import AllSports from "../Pages/AllSports/AllSports";
import baseURL from "../Utils/url";
import MyList from "../Pages/MyList/MyList";
import SpotDetails from "../Pages/SpotDetails/SpotDetails";

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
                element: <PrivateRoute>
                    <AddSpot update={false}></AddSpot>
                </PrivateRoute>
            },
            {
                path: "/update/:id",
                element: <PrivateRoute>
                    <AddSpot update={true}></AddSpot>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${baseURL}/spot/${params.id}`)
            },
            {
                path: "/allSpot",
                element: <PrivateRoute>
                    <AllSports></AllSports>
                </PrivateRoute>,
                loader: () => fetch(`${baseURL}/spots`)
            },
            {
                path: "/spot/:id",
                element: <PrivateRoute>
                    <SpotDetails></SpotDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${baseURL}/spot/${params.id}`)
            },
            {
                path: "/myList",
                element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>
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