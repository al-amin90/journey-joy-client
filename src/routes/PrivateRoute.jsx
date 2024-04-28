import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Utils/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    console.log(location.pathname);

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/singIn"></Navigate>
};

export default PrivateRoute;