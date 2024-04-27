import { useNavigate, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/404.jpg';

const ErrorPage = () => {
    const { error } = useRouteError()
    const navigate = useNavigate()
    console.log(error);

    return (
        <div>
            <section className="flex items-center h-full ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className=" w-10/12 mx-auto text-center">
                        <figure className='max-w-md mx-auto'>
                            <img src={errorImg} alt="" />
                        </figure>
                        <p className="text-2xl relative -top-6 font-semibold md:text-3xl">{error?.message}</p>
                        <button onClick={() => navigate("/")} className="px-8 border-2 border-[#2BA2FF] hover:text-[#2BA2FF] text-white duration-300 hover:bg-white bg-[#2BA2FF] py-3 font-semibold rounded">Back to homepage</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;