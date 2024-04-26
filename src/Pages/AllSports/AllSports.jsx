import { useEffect, useState } from "react";
import SportCard from "../../componens/SportCard/SportCard";


const AllSports = () => {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        fetch(`places.json`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
    }, [])


    // console.log(spot);


    return (
        <div className='max-w-7xl mx-auto w-[90%] my-12 mb-24 md:w-[85%]'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>All</span> Tourists Spots</h2>
                <p className='md:w-3/4 mx-auto mb-12'>Discover iconic landmarks and breathtaking destinations from around the globe in our curated collection of popular tourist spots. Immerse yourself in the beauty of natural wonders.</p>
            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
                <SportCard spots={spots}></SportCard>
            </div>
        </div>
    );
};

export default AllSports;