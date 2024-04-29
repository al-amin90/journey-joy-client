import useAuth from '../../Hooks/useAuth';
import singIn from '../../assets/singin.png';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Zoom, toast } from 'react-toastify';
import SingInWithSocialMedia from '../../componens/SingInWithSocialMedia/SingInWithSocialMedia';

const SingIn = () => {
    const [isShowed, setIsShowed] = useState(true)
    const navigate = useNavigate();
    const { userSingIn } = useAuth()
    const location = useLocation()
    console.log(location.state);

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        userSingIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : "/")

                console.log(result);
                toast.success("Login successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                    transition: Zoom,
                })
            })

            .catch(error => {
                console.log(error);

                if (error.message.includes("invalid-credential")) {
                    toast.error("Incorrect email or password", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                        transition: Zoom,
                    })
                    return;
                }

                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                    transition: Zoom,
                })

            })

    }

    return (
        <div>
            <div className="max-w-[1920px] mx-auto md:w-[85%] pb-10">

                <div className=" rounded-3xl lg:shadow mt-10">
                    <div className="w-full flex-col-reverse lg:flex-row flex">


                        <div className="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none">
                            <div className=" p-5 ">
                                <div className="pb-4">
                                    <p className="text-3xl font-bold mb-2">Sing In</p>
                                </div>

                                <form onSubmit={handleSignIn} className="space-y-3 w-full ">

                                    <div>
                                        <fieldset className="border-x border-solid border-gray-300 p-3 w-full rounded">
                                            <legend className=" font-medium text-black/60">
                                                Email
                                            </legend>
                                            <input
                                                type="email"
                                                name="email"
                                                id=""
                                                placeholder="Email"
                                                className="px-4 py-1 w-full focus:outline-0"
                                            />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="border-x relative border-solid border-gray-300 p-3 w-full rounded">
                                            <legend className=" font-medium text-black/60">
                                                Password
                                            </legend>
                                            <input
                                                type={isShowed ? "password" : "text"}
                                                name="password"
                                                id=""
                                                placeholder="password"
                                                className="px-4 py-1 w-full focus:outline-0"
                                            />
                                            <div onClick={() => setIsShowed(!isShowed)} className="absolute right-4 text-xl top-4">
                                                {isShowed ?
                                                    <FaEyeSlash></FaEyeSlash>
                                                    : <FaEye />
                                                }
                                            </div>
                                        </fieldset>
                                    </div>


                                    <button className="py-4 w-full px-5 text-lg text-white bg-[#2BA2FF] rounded-full hover:shadow-xl font-semibold">Log In</button>

                                    <div className="my-5  border-b text-center">
                                        <div className="leading-none px-2 inline-block text-sm text-gray-600 bg-white tracking-wide font-medium  transform translate-y-3/4">
                                            Or sign In with e-mail
                                        </div>
                                    </div>

                                </form>
                                <SingInWithSocialMedia></SingInWithSocialMedia>

                                <div className='text-black/90 mt-7 text-center mb-6 font-medium text-lg'>Don’t have an account? <Link to="/register" className=" font-normal text-[#3baaff] underline">
                                    Register
                                </Link></div>


                            </div>
                        </div>

                        <div
                            className="mx-auto h-64 lg:h-auto w-[90%] md:w-full lg:w-1/2  lg:rounded-r-3xl "
                            style={{
                                background: `url(${singIn})`,
                                backgroundSize: "cover",
                                backgroundOrigin: "content-box",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;