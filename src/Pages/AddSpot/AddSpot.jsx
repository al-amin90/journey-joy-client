import { MdPlaylistAddCircle } from "react-icons/md";
import add from "../../assets/add.png"
import useAuth from "../../Hooks/useAuth";
import baseURL from "../../Utils/url";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AddSpot = ({ update }) => {
    const { user } = useAuth()
    const spot = useLoaderData()


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

        const userName = user.displayName;
        const email = user.email;

        const spotInfo = { spotName, AVGCost, seasonality, visitors, travel_time, countryName, location, image, description, userName, email }
        console.log(spotInfo);

        {
            update ? fetch(`${baseURL}/spot/${spot._id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(spotInfo)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.matchedCount > 0) {
                        Swal.fire({
                            title: "Update Successfully",
                            text: "You Post has been Updated!!!",
                            icon: "success"
                        });
                    }
                })

                :
                fetch(`${baseURL}/spots`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(spotInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        form.reset()

                        if (data.insertedId) {
                            Swal.fire({
                                title: "Add Successfully",
                                text: "You Post has been Added!",
                                icon: "success"
                            });
                            console.log(data);
                        }
                    })
        }



    }

    return (
        <div className="pb-14 mb-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${add})` }}
        >
            <div className="shadow-lg rounded-3xl bg-white/80 backdrop-blur-md p-5 border mx-auto md:w-[85%] pt-10">
                {/* Heading */}
                <div className="mt-5 mb-10">
                    <div className="flex items-center text-center justify-center text-3xl font-semibold">

                        <h1>
                            <span className="">
                                <span className="text-[#2BA2FF]">
                                    {update ? "Update " : "Add "}
                                </span>
                                Your
                            </span>{' '}
                            <span >
                                <Typewriter
                                    words={['Favorite Spot', 'Tourists Spot']}
                                    loop={true}
                                    cursor
                                    cursorColor="#2BA2FF"
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>


                    </div>
                </div>



                {/* form */}
                <form onSubmit={handleAddProduct}>
                    <div className="flex flex-col md:flex-row gap-8 ">
                        <div className="flex-1">
                            <label className="block font-semibold mb-2 " htmlFor="spotName">
                                Spot Name

                            </label>
                            <input
                                defaultValue={spot?.spotName || ""}
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
                                defaultValue={spot?.AVGCost || ""}
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
                                defaultValue={spot?.seasonality || ""}
                                className="w-full p-2 border dark:bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                placeholder="Select Seasonality"
                            >
                                <option defaultValue="Summer">Summer</option>
                                <option defaultValue="Spring">Spring</option>
                                <option defaultValue="Winter">Winter</option>
                                <option defaultValue="Blossom Bliss">Blossom Bliss</option>
                                <option defaultValue="Autumn">Autumn</option>
                            </select>

                            <label className="block mt-4 font-semibold mb-2 " htmlFor="travel_time">
                                Travel Time
                            </label>
                            <input
                                className="w-full p-2 border dark:bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                defaultValue={spot?.travel_time || ""}
                                type="text"
                                placeholder="Enter Travel Time"
                                id="travel_time"
                                name="travel_time"
                            />

                            <label className="block mt-4 font-semibold mb-2 " htmlFor="visitors">
                                Total Visitors PerYear
                            </label>
                            <input
                                className="w-full p-2 border dark:bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                defaultValue={spot?.visitors || ""}
                                type="number"
                                placeholder="Enter Total Visitors"
                                id="visitors"
                                name="visitors"
                            />

                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold " htmlFor="countryName">
                                Country Name
                            </label>
                            <select
                                name="countryName"
                                id="countryName"
                                defaultValue={spot?.countryName || ""}
                                className="w-full p-2 bg-[#2ba3ff09] border rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                placeholder="Select Spot Name"
                            >
                                <option defaultValue="United States of America">United States of America</option>
                                <option defaultValue="Canada">Canada</option>
                                <option defaultValue="Brazil">Brazil</option>
                                <option defaultValue="Argentina">Argentina</option>
                                <option defaultValue="Mexico">Mexico</option>
                                <option defaultValue="Peru">Peru</option>
                            </select>



                            <label className="block mb-2 font-semibold mt-4 " htmlFor="location">
                                Location
                            </label>
                            <input
                                className="w-full p-2 border bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={spot?.location || ""}
                                placeholder="Enter Location"
                                id="location"
                                name="location"
                            />
                            <label className="block mb-2 font-semibold mt-8 " htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border dark:bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                type="text"
                                defaultValue={spot?.image || ""}
                                placeholder="Enter Image  URL"
                                id="image"
                                name="image"
                            />

                            <label className="block mb-2 font-semibold mt-2 " htmlFor="description">
                                Description
                            </label>

                            <textarea
                                defaultValue={spot?.description || ""}
                                placeholder="Enter Description"
                                className="w-full p-2 border dark:bg-[#2ba3ff09] rounded-md focus:outline-[#2BA2FF]"
                                id="description"
                                cols="10"
                                name="description"
                                rows="5">

                            </textarea>



                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4  hover:bg-[#0593ff]  bg-[#2BA2FF] duration-200 rounded-full text-white cursor-pointer font-semibold"
                        type="submit"
                        value={update ? "Update Spot" : "Add Spot"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddSpot;