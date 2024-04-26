import register from '../../assets/s11.png';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleSignUp = e => {

    }

    return (
        <div>
            <div className="max-w-[1920px] mx-auto md:w-[85%] pb-10">

                <div className=" rounded-3xl lg:shadow mt-10">
                    <div className="w-full flex-col lg:flex-row flex">
                        <div
                            className="w-full h-64 lg:h-[33rem] lg:pt-20  lg:w-1/2  rounded-l-lg "
                            style={{
                                background: `url(${register})`,
                                backgroundSize: "contain",
                                backgroundOrigin: "content-box",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        >
                        </div>

                        <div className="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none">
                            <div className=" p-5 ">
                                <div className="pb-4">
                                    <p className="text-3xl font-bold mb-2">Register Here!</p>
                                </div>



                                <form onSubmit={handleSignUp} className="space-y-3 w-full ">
                                    <div>
                                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                                            <legend className=" font-medium text-black/60">
                                                Name
                                            </legend>
                                            <input
                                                type="text"
                                                name="name"
                                                id=""
                                                placeholder="name"
                                                className="px-4 py-1 w-full focus:outline-0"
                                            />
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
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
                                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                                            <legend className=" font-medium text-black/60">
                                                Password
                                            </legend>
                                            <input
                                                type="password"
                                                name="password"
                                                id=""
                                                placeholder="password"
                                                className="px-4 py-1 w-full focus:outline-0"
                                            />
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                                            <legend className=" font-medium text-black/60">
                                                ImageURL
                                            </legend>
                                            <input
                                                type="text"
                                                name="imageURL"
                                                id=""
                                                placeholder="imageURL"
                                                className="px-4 py-1 w-full focus:outline-0"
                                            />
                                        </fieldset>
                                    </div>
                                    <button className="py-4 w-full px-5 text-lg text-white bg-[#2BA2FF] rounded-full hover:shadow-xl font-semibold">Register</button>


                                </form>

                                <div className='text-black/90 mt-7 text-center mb-6 font-medium text-lg'>Already have an account? <Link to="/singIn" className=" font-normal text-[#3baaff] underline">
                                    Login
                                </Link></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;