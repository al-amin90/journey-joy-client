import React from 'react';
import Navbar from '../sharedPage/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../sharedPage/Footer/Footer';
import Loader from '../Utils/Loader/Loader';

const Root = () => {
    const navigation = useNavigation()
    console.log(navigation);

    return (
        <div>
            <Navbar></Navbar>
            {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;