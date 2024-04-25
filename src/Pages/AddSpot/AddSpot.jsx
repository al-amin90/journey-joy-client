import { BiSolidAlarmAdd } from "react-icons/bi";

const AddSpot = () => {
    const update = false


    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;

        const spotName = form.spotName.value;
        const AVGCost = form.AVGCost.value;
        const seasonality = form.seasonality.value;
        const visitors = form.visitors.value;
        const travel_time = form.travel_time.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const image = form.image.value;
        const description = form.description.value;

        const spotInfo = { spotName, AVGCost, seasonality, visitors, travel_time, countryName, location, image, description }
        console.log(spotInfo);
    }

    return (
        <div className="max-w-[1920px] mx-auto md:w-[85%] pt-10">
            <div className="shadow-lg p-5 border">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="flex items-center justify-center text-3xl font-semibold">
                        <span className="mr-3 text-[#2BA2FF]">
                            <BiSolidAlarmAdd />
                        </span>
                        <span className="">
                            <span className="text-[#2BA2FF]">
                                {update ? "Update " : "Add "}
                            </span>
                            Your Tourists Spot
                        </span>
                    </p>
                </div>



                {/* form */}
                <form onSubmit={handleAddProduct}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block font-semibold mb-2 " htmlFor="spotName">
                                Spot Name

                            </label>
                            <input
                                defaultValue={"" || ""}
                                className="w-full p-2 border bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                placeholder="Enter Spot Name"
                                id="spotName"
                                name="spotName"
                            />

                            <label className="block mt-4 font-semibold mb-2 " htmlFor="AVGCost">
                                AVG Cost
                            </label>
                            <input
                                className="w-full p-2 border bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={"" || ""}
                                placeholder="Enter AVG Cost"
                                id="AVGCost"
                                name="AVGCost"
                            />

                            <label className="block mt-8 font-semibold mb-2 " htmlFor="seasonality">
                                Seasonality
                            </label>
                            <select
                                name="seasonality"
                                id="seasonality"
                                defaultValue={"" || ""}
                                className="w-full p-2 border rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                placeholder="Select Seasonality"
                            >
                                <option defaultValue="Summer Serenity">Summer Serenity</option>
                                <option defaultValue="Winter Whimsy">Winter Whimsy</option>
                                <option defaultValue="Spring Sunshine">Spring Sunshine</option>
                                <option defaultValue="Blossom Bliss">Blossom Bliss</option>
                                <option defaultValue="Tropical Tranquility">Tropical Tranquility</option>
                                <option defaultValue="Snowy Solitude">Snowy Solitude</option>
                                <option defaultValue="Sunny Spectacle">Sunny Spectacle</option>
                            </select>

                            <label className="block mt-4 font-semibold mb-2 " htmlFor="visitors">
                                Total Visitors PerYear
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#2BA2FF]"
                                defaultValue={"" || ""}
                                type="number"
                                placeholder="Enter Total Visitors"
                                id="visitors"
                                name="visitors"
                            />

                            <label className="block mt-4 font-semibold mb-2 " htmlFor="travel_time">
                                Travel Time
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#2BA2FF]"
                                defaultValue={"" || ""}
                                type="date"
                                placeholder="Enter Travel Time"
                                id="travel_time"
                                name="travel_time"
                            />


                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold " htmlFor="countryName">
                                Country Name
                            </label>
                            <input
                                className="w-full p-2 border bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={"" || ""}
                                placeholder="Enter Country Name"
                                id="countryName"
                                name="countryName"
                            />
                            <label className="block mb-2 font-semibold mt-4 " htmlFor="location">
                                Location
                            </label>
                            <input
                                className="w-full p-2 border bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={"" || ""}
                                placeholder="Enter Location"
                                id="location"
                                name="location"
                            />
                            <label className="block mb-2 font-semibold mt-8 " htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={"" || ""}
                                placeholder="Enter Image  URL"
                                id="image"
                                name="image"
                            />

                            <label className="block mb-2 font-semibold mt-2 " htmlFor="description">
                                Description
                            </label>

                            <textarea
                                defaultValue={"" || ""}
                                placeholder="Enter Description"
                                className="w-full p-2 border rounded-md focus:outline-[#2BA2FF]"
                                id="description"
                                cols="10"
                                name="description"
                                rows="5">

                            </textarea>



                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#0593ff]  bg-[#2BA2FF] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value={update ? "Update Spot" : "Add Spot"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddSpot;