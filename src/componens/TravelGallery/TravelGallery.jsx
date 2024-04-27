import plane from '../../assets/plane.png';
import river from '../../assets/river.png';
import hat from '../../assets/hat.png';
import cycle from '../../assets/cycle.png';
import bag from '../../assets/bag.png';
import naruto from '../../assets/naruto.png';
import car from '../../assets/car.png';
import { Fade } from 'react-awesome-reveal';

const TravelGallery = () => {
    return (
        <div className='max-w-7xl  mx-auto w-[90%] mt-32 relative -top-40 md:w-[85%]'>
            <Fade>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>Tourists</span> Countries</h2>
                    <p className='md:w-3/4 text-sm md:text-base mx-auto mb-12'>Explore our captivating travel gallery for instant inspiration and plan your next adventure with ease! Visual journey through our stunning travel gallery. </p>
                </div>
            </Fade>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 h-full md:h-[16rem] lg:h-[22rem] gap-4'>
                    <div className=' '>
                        <img className='rounded-md h-full md:h-[16rem] lg:h-[22rem] w-full object-cover' src={plane} alt="" />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <img className='rounded-md w-full h-full md:h-[7.5rem] lg:h-[10.5rem] object-cover' src={river} alt="" />
                        <img className='w-full rounded-md h-full object-cover md:h-[7.5rem] lg:h-[10.5rem]' src={hat} alt="" />
                    </div>
                    <div className='w-full '>
                        <img className='rounded-md md:h-[16rem] h-full lg:h-[22rem] w-full object-cover' src={cycle} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-4 md:h-[16rem] h-full lg:h-[22rem] gap-4'>
                    <div className=' '>
                        <img className='rounded-md md:h-[16rem] h-full lg:h-[22rem] object-cover w-full' src={car} alt="" />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <img className='rounded-md md:h-[16rem] h-full lg:h-[22rem] object-cover w-full' src={naruto} alt="" />
                    </div>
                    <div className='w-full '>
                        <img className='rounded-md md:h-[16rem] lg:h-[22rem] object-cover' src={bag} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelGallery;