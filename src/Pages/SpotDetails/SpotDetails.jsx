import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';
import { FaPeoplePulling } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaPlaneDeparture } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot);

    return (
        <div className='bg-[#F4F4F4]'>
            <div className='max-w-7xl grid py-24 mb-12 grid-cols-1 lg:grid-cols-2 mx-auto w-[90%]  md:w-[85%]'>
                <div className='mb-4 lg:mr-16'>
                    <figure><img className='rounded-xl object-cover h-80 w-full' src={spot?.image} alt="" /></figure>

                    <div className="flex items-center mt-4 p-6 space-x-4 rounded-md bg-gray-50 ">
                        <div className="flex items-center text-2xl justify-center">
                            <LuPartyPopper />
                        </div>
                        <span>Enjoy your time in <span className="font-semibold">{spot?.countryName}</span> to the fullest!</span>
                    </div>
                </div>

                <div className=''>
                    <h1 className='font-extrabold text-black/90  text-3xl'>{spot?.spotName}</h1>
                    <div className="text-[#717C7D] mt-3">
                        <p className="flex items-center mb-3 gap-2">
                            <FaLocationDot /> {spot?.location}
                        </p>
                        <p className="text-base w-11/12">{spot?.description}</p>
                    </div>
                    <div className="bg-white rounded-xl mt-6 py-5">
                        <div className="flex justify-between border-b pb-4 px-6">
                            <div>
                                <p className="text-xs font-medium text-[#A2AAAB]">AVG COST</p>
                                <p className="text-2xl mt-1 font-bold text-[#2BA2FF]">${spot?.AVGCost}<span className="text-black/90 text-sm font-medium ">/Per Person</span></p>
                            </div>
                            <button className="py-2 px-5 text-base border-2 border-[#2BA2FF] hover:text-[#2BA2FF] text-white duration-300 hover:bg-white bg-[#2BA2FF] rounded-full flex items-center gap-2 hover:shadow-xl font-medium">Book Now </button>

                        </div>
                        <div className="px-6 pb-5 mt-4">

                            <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaCloudSun className=" mr-2" /> Seasonality:
                                <span className="text-black/90 ml-3">{spot?.seasonality}</span></p>
                            <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                <LuClock className=" mr-2" /> Travel Time:
                                <span className="text-black/90 ml-3">{spot?.travel_time}</span></p>
                            <p className="flex text-base mt-1 ml-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaPeoplePulling className=" mr-2" /> Visitors:
                                <span className="text-black/90  ml-3">{spot?.visitors}/yr</span>
                            </p>
                            <p className="flex text-base mt-1 ml-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaPlaneDeparture className=" mr-2" /> Country Name:
                                <span className="text-black/90  ml-3">{spot?.countryName}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;