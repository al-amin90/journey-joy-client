import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Zoom, toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate()
    const { user, userSingOut } = useAuth()

    const handleSingOut = () => {
        userSingOut()
            .then(() => {

                toast.success("Log Out successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                    transition: Zoom,
                })
            })
    }

    const NavLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 mr-3 px-2 text-base text-[#2BA2FF] border-[#2BA2FF] font-bold" : "text-base mr-3 px-2 hover:border-b-2  hover:text-[#2BA2FF] "
            }>Home
        </NavLink>
        <NavLink
            to="/allSpot"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 mr-3 px-2 text-base text-[#2BA2FF] border-[#2BA2FF] font-bold" : "text-base mr-3 px-2 hover:border-b-2  hover:text-[#2BA2FF] "
            }>All Spots
        </NavLink>
        <NavLink
            to="/addSpot"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 mr-3 px-2 text-base text-[#2BA2FF] border-[#2BA2FF] font-bold" : "text-base mr-3 px-2 hover:border-b-2  hover:text-[#2BA2FF] "
            }>Add Spot
        </NavLink>
        <NavLink
            to="/myList"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 mr-3 px-2 text-base text-[#2BA2FF] border-[#2BA2FF] font-bold" : "text-base mr-3 px-2 hover:border-b-2  hover:text-[#2BA2FF] "
            }>My List
        </NavLink>


    </>

    return (
        <div className='bg-base-100 my-3'>
            <div className="navbar max-w-7xl mx-auto w-[90%] md:w-[85%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className=" text-2xl font-black">Journey<span className='text-[#2BA2FF]'>Joy</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {
                        user ?
                            <div className="dropdown absolute dropdown-hover">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full ring ring-[#2BA2FF] ring-offset-base-100">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu pl-2 shadow bg-base-100 rounded-box w-52 font-bold relative right-2 z-20">
                                    <li className='px-3 text-[#2BA2FF] py-2 border-b'>{user?.displayName} </li>
                                    <li onClick={handleSingOut} className='px-3 hover:text-white rounded-b-xl bg-[#2BA2FF] py-2 cursor-pointer'>Logout</li>
                                </ul>
                            </div>
                            :
                            <div className='gap-2 flex'>
                                <button onClick={() => navigate("/singIn")} className="py-2 px-5 text-base text-white bg-[#2BA2FF] rounded-full hover:shadow-xl font-semibold">Login</button>
                                <button onClick={() => navigate("/register")} className="py-2 px-5 text-base text-white bg-[#2BA2FF] rounded-full hover:shadow-xl font-semibold">Register</button>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;