import { useState } from "react";
import SportCard from "../../componens/SportCard/SportCard";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const AllSports = () => {
    const loadedAllSpots = useLoaderData()
    const [allSpots, setAllSpots] = useState(loadedAllSpots);
    const [a, setA] = useState(null)



    const handleSort = sort => {

        if (sort.value === "Ascending") {
            const assPriceSpot = allSpots.sort((a, b) => parseFloat(a.AVGCost) - parseFloat(b.AVGCost))
            setA("Ascending")
            setAllSpots(assPriceSpot)
        }
        else if (sort.value === "Descending") {
            const deePriceSpot = allSpots.sort((a, b) => parseFloat(b.AVGCost) - parseFloat(a.AVGCost))
            setA("Descending")
            setAllSpots(deePriceSpot)
        }
    }
    // console.log(spot);


    return (
        <div className='max-w-7xl mx-auto w-[90%] my-12 mb-24 md:w-[85%]'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>All</span> Tourists Spots</h2>
                <p className='md:w-3/4 mx-auto mb-6'>Discover iconic landmarks and breathtaking destinations from around the globe in our curated collection of popular tourist spots. Immerse yourself in the beauty of natural wonders.</p>
            </div>

            <div className="flex items-center justify-center">
                <select
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Sort By AVG COST!"
                    data-tooltip-place="top"
                    onChange={(e) => handleSort(e.target)}
                    name="sort"
                    className="select font-semibold bg-[#2b516d] text-white mb-12 select-info w-36 max-w-xs">
                    <option defaultValue="" >AVG COST</option>
                    <option defaultValue="Ascending">Ascending</option>
                    <option defaultValue="Descending">Descending</option>
                </select>
            </div>

            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-5">
                {
                    allSpots.map(spot => <SportCard
                        key={spot?._id}
                        spot={spot}></SportCard>)
                }

            </div>
            <Tooltip id="my-tooltip" />
        </div >
    );
};

export default AllSports;