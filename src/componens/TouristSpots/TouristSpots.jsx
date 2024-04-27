import React, { useEffect, useState } from 'react';
import baseURL from '../../Utils/url';
import { SiFireship } from "react-icons/si";

const TouristSpots = () => {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/spots`)
            .then(res => res.json())
            .then(data => setSpots(data))

        console.log(spots);
    }, [])

    return (
        <div className='max-w-7xl  mx-auto w-[90%] mt-32 my-24 md:w-[85%]'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>Popular</span> Tourists Spots</h2>
                <p className='md:w-3/4 mx-auto mb-12'>Explore the latest must-visit destinations, from iconic landmarks to hidden gems. Immerse yourself in captivating cultures and breathtaking landscapes for unforgettable experiences.</p>
            </div>



            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    spots.slice(3, 9).map(spot => (
                        <div className="md:h-72 h-[250px] z-20 rounded-xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${spot?.image}})` }}>
                            <div className="bg-black h-full p-6 rounded-xl bg-opacity-60 ">
                                <div className="flex flex-col min-h-full">
                                    <div className='flex  justify-end'>
                                        <button className="bg-[#ff802b] rounded-full py-1 px-3 text-white text-sm hover:bg-[#0D396A]">
                                            <SiFireship />
                                        </button>
                                    </div>
                                    <div className="flex flex-grow flex-col justify-end items-start text-white">
                                        <div>
                                            <p className="text-xl md:text-2xl font-bold text-center lg:text-left">
                                                {spot?.spotName}
                                            </p>
                                            <p className="font-medium mt-1 text-sm  text-center lg:text-left">
                                                {spot?.description}
                                            </p>

                                            <div className=" flex items-center justify-between">
                                                <button className="bg-[#2BA2FF] rounded-full py-2 mt-3 px-6 text-white hover:shadow-md hover:border hover:border-[#2BA2FF]   font-semibold hover:bg-transparent">
                                                    Details
                                                </button>
                                                <p className="text-xl  font-bold text-[#2BA2FF]"><span className='text-white  text-xl border-b-2'>{spot?.AVGCost}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TouristSpots;