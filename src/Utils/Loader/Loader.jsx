import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-[calc(100vh-88px)]'>

            <HashLoader
                color="#2BA2FF"
                cssOverride={{}}
                loading
                size={70}
                speedMultiplier={30}
            />
        </div>
    );
};

export default Loader;