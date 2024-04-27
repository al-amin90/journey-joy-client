import { FaArrowRight, FaLocationDot, FaPeoplePulling } from "react-icons/fa6";
import { LuClock, LuCircleDollarSign } from "react-icons/lu";
import { FaCloudSun, FaPlaneDeparture } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';

const CountrySpots = () => {
    const countries = useLoaderData()
    const navigate = useNavigate()
    const spot = countries[0];
    console.log(spot);

    return (
        <div>
            <div className="shadow-lg rounded-3xl mb-36 bg-white/80 backdrop-blur-md p-5 border mx-auto md:w-[85%] pt-10">
                {/* Heading */}
                <div className="mt-5 ">
                    <p className="flex items-center text-center justify-center text-2xl md:text-3xl font-semibold">
                        <span className="">
                            <span className="text-[#2BA2FF]">
                                {countries[0]?.countryName}
                            </span> Tourists Spots
                        </span>
                    </p>

                    <div className="grid mt-16 grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            countries.map(spot => <div
                                key={spot._id}
                                className="min-h-full">
                                <div className="card min-h-full  card-compact font-open bg-base-100 shadow-make">
                                    <figure className="md:h-72 h-[250px] rounded-xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${spot?.image})` }}>
                                    </figure>
                                    <div className="relative px-6 mt-5">
                                        <h2 className="text-2xl font-bold">{spot?.spotName}</h2>

                                        <p className="flex text-base mt-4 font-semibold text-[#2BA2FF] items-center ">
                                            <FaPeoplePulling className=" text-xl mr-2" /> Visitors:
                                            <span className="text-black/90  font-medium ml-3">{spot?.visitors}/yr</span>
                                        </p>
                                        <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                            <FaCloudSun className=" text-xl mr-2" /> Seasonality:
                                            <span className="text-black/90  font-medium ml-3">{spot?.seasonality}</span></p>
                                        <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                            <FaPlaneDeparture className=" mr-2" /> Country Name:
                                            <span className="text-black/90 font-medium ml-3">{spot?.countryName}</span>
                                        </p>
                                        <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                            <FaLocationDot className=" mr-2" /> Location:
                                            <span className="text-black/90 font-medium ml-3">{spot?.location}</span>
                                        </p>
                                        <p className="flex mt-6 text-base  font-semibold text-[#2BA2FF]  ">
                                            <span className="underline">Description:</span>
                                            <span className="text-black/90 text-sm font-medium ml-3">{spot?.description}</span>
                                        </p>


                                        <div className="flex justify-between pb-6 mt-6">
                                            <button onClick={() => navigate(`/spot/${spot?._id}`)} className="py-2 px-5 text-base border-2 border-[#2BA2FF] hover:text-[#2BA2FF] uppercase text-white duration-300 hover:bg-white bg-[#2BA2FF] rounded-full flex items-center gap-2 hover:shadow-xl font-semibold">Details <FaArrowRight /></button>
                                            <div>
                                                <p className="text-sm font-medium text-black/90">From</p>
                                                <p className="text-xl font-bold text-[#2BA2FF]">${spot?.AVGCost} <span className="text-black/90 text-sm font-medium "> Per Person</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountrySpots;