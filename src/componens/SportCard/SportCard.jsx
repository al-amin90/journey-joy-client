import { FaEyeSlash } from "react-icons/fa";
import { LuClock } from "react-icons/lu";

const SportCard = ({ spots }) => {
    const spot = spots[0]
    // const { image } = spot;
    console.log(spot);


    return (
        <div className="">
            <div className="card card-compact font-open w-96 bg-base-100 shadow-lg">
                <figure><img src={spot?.image} alt="Shoes" /></figure>
                <div className="relative px-6 mt-5">
                    <div style={{ borderRadius: "0% 33% 0% 27% / 0% 100% 10% 100% " }} className="absolute -top-12 border-2 text-lg bg-[#2BA2FF] text-white px-6 py-2 w-fit  font-medium ">
                        <div className="flex items-center gap-2 ">
                            <LuClock />
                            {spot?.travel_time}
                        </div>
                    </div>
                    <h2 className="text-2xl mt-2 font-bold">{spot?.spotName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="py-2 px-5 text-base border-2 text-[#2BA2FF] hover:text-white hover:bg-[#2BA2FF] rounded-full hover:shadow-xl font-semibold">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;