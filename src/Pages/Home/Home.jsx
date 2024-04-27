import React from 'react';
import Banner from '../../componens/Banner/Banner';
import TouristSpots from '../../componens/TouristSpots/TouristSpots';
import Adventure from '../../componens/Adventure/Adventure';
import TravelGallery from '../../componens/TravelGallery/TravelGallery';
import Countries from '../../componens/Countries/Countries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots ></TouristSpots>
            <Countries></Countries>
            <Adventure></Adventure>
            <TravelGallery></TravelGallery>
        </div>
    );
};

export default Home;