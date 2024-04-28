import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import baseURL from '../../Utils/url';
import Loader from '../../Utils/Loader/Loader';

const Countries = () => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        fetch(`${baseURL}/countrySpots`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCountries(data)
            })
    }, [])

    return (
        <div className='max-w-7xl  mx-auto w-[90%] md:w-[85%]'>
            <Fade>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl mb-3'><span className='text-[#2BA2FF]'>Tourists</span> Countries</h2>
                    <p className='md:w-3/4 text-sm md:text-base mx-auto mb-12'>Discover the charm and beauty of countries with our curated selection of top tourist spots. From iconic landmarks to hidden gems, explore the rich culture and breathtaking landscapes that await you in this vibrant destination. </p>
                </div>
            </Fade>

            {
                loading ? <Loader></Loader>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                        {
                            countries.map(con => <div
                                key={con?.id}
                                onClick={() => navigate(`/countrySpots/${con?.name}`)}
                                className="cursor-pointer dark:bg-slate-500 hover:scale-105 duration-300 bg-white hover:bg-[#d3ecff] text-black/90 rounded-2xl shadow-make z-20">
                                <img src={con?.image} alt="" className="object-cover rounded-2xl object-center w-full h-56" />
                                <div className="flex relative justify-between p-6 space-y-8">
                                    <div className="space-y-2 text-center ">
                                        <Zoom>
                                            <h2 className="text-xl absolute left-1/2 transform -translate-x-1/2 text-white py-2 rounded-full min-w-max -top-11 px-6 bg-[#2BA2FF] font-bold">{con.name}</h2>
                                        </Zoom>
                                        <p className="text-sm dark:text-white">{con.description}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }

        </div>
    );
};

export default Countries;