import { SiFireship } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from "react";


const Banner = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        fetch('/banners.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])


    return (
        <div>
            <Swiper
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                {
                    banners.map(ban => <SwiperSlide>
                        <div className="md:h-[calc(100vh-95px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ban.image_url})` }}>
                            <div className="bg-black md:w-1/2 h-full bg-opacity-60 ">
                                <div className="mx-auto h-full w-[85%] flex items-center">
                                    <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                        <p className="text-2xl md:text-3xl lg:text-5xl w-11/12 font-bold text-center md:text-left">
                                            {ban.slogan}
                                        </p>
                                        <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                            {ban.short_description}
                                        </p>

                                        <div className="flex justify-center md:justify-start">
                                            <button className="bg-[#2BA2FF] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#0D396A]">
                                                <span className="mr-3">
                                                    <i className="bx bx-hive"></i>
                                                </span>
                                                Explore Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* left */}
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};

export default Banner;