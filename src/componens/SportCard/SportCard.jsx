import { FaArrowRight } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { FaPeoplePulling } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";

const SportCard = ({ spot }) => {



    return (
        <div className="min-h-full">
            <div className="card min-h-full  card-compact font-open bg-base-100 shadow-make">
                <figure className="md:h-60 h-[300px] rounded-xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${spot?.image})` }}>
                </figure>
                <div className="relative px-6 mt-5">
                    <div style={{ borderRadius: "0% 33% 0% 27% / 0% 100% 10% 100% " }} className="absolute -top-12 border-2 text-lg bg-[#2BA2FF] text-white px-6 py-2 w-fit  font-medium ">
                        <div className="flex items-center gap-2 ">
                            <LuClock />
                            {spot?.travel_time}
                        </div>
                    </div>
                    <h2 className="text-2xl mt-2 font-bold">{spot?.spotName}</h2>

                    <p className="flex text-base mt-4 font-semibold text-[#2BA2FF] items-center ">
                        <FaPeoplePulling className=" text-xl mr-2" /> Visitors:
                        <span className="text-black/90  font-medium ml-3">{spot?.visitors}/yr</span>
                    </p>
                    <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                        <FaCloudSun className=" text-xl mr-2" /> Seasonality:
                        <span className="text-black/90  font-medium ml-3">{spot?.seasonality}</span></p>


                    <div className="flex justify-between pb-6 mt-6">
                        <button className="py-2 px-5 text-base border-2 border-[#2BA2FF] hover:text-[#2BA2FF] uppercase text-white duration-300 hover:bg-white bg-[#2BA2FF] rounded-full flex items-center gap-2 hover:shadow-xl font-semibold">Details <FaArrowRight /></button>
                        <div>
                            <p className="text-sm font-medium text-black/90">From</p>
                            <p className="text-xl font-bold text-[#2BA2FF]">{spot?.AVGCost} <span className="text-black/90 text-sm font-medium "> Per Person</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;