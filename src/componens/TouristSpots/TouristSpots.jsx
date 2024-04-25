import React, { useEffect, useState } from 'react';

const TouristSpots = ({ banners }) => {

    const ban = banners[0]
    console.log(ban);


    return (
        <div className='max-w-7xl mx-auto w-[90%] my-24 md:w-[85%]'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>Popular</span> Tourists Spots</h2>
                <p className='md:w-3/4 mx-auto mb-12'>Explore the latest must-visit destinations, from iconic landmarks to hidden gems. Immerse yourself in captivating cultures and breathtaking landscapes for unforgettable experiences.</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className="md:h-60 h-[500px] rounded-xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ban?.image_url})` }}>
                    <div className="bg-black h-full p-6 rounded-xl bg-opacity-60 ">
                        <div className="h-full">
                            <div className='flex justify-end'>
                                <button className="bg-[#2BA2FF] rounded-full py-1 px-3 text-white text-sm hover:bg-[#0D396A]">
                                    $565
                                </button>
                            </div>
                            <div className="flex flex-col mt-7 justify-end items-start text-white">
                                <div>
                                    <p className="text-sm md:text-xl w-11/12 font-bold text-center md:text-left">
                                        {ban?.category_name}
                                    </p>
                                    <p className="font-medium mt-1 text-sm md:text-base text-center md:text-left">
                                        {ban?.short_description.slice(0, 30)}
                                    </p>

                                    <div className="">
                                        <button className="bg-[#2BA2FF] rounded-full py-2 mt-3 px-6 text-white hover:shadow-md hover:border hover:border-[#2BA2FF]  hover:text-[#2BA2FF] font-semibold hover:bg-white">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;