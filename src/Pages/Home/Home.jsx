import React from 'react';
import Banner from '../../componens/Banner/Banner';
import TouristSpots from '../../componens/TouristSpots/TouristSpots';
import Adventure from '../../componens/Adventure/Adventure';
import TravelGallery from '../../componens/TravelGallery/TravelGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots ></TouristSpots>
            <Adventure></Adventure>
            <TravelGallery></TravelGallery>
        </div>
    );
};

export default Home;