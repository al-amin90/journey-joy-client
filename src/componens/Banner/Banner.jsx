import { SiFireship } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from "react";


const Banner = () => {



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
                <SwiperSlide>
                    <div className="md:h-[calc(100vh-88px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/g2889HKS/grand-canyon-1.jpg)` }}>
                        <div className="bg-black md:w-1/2 h-full bg-opacity-60 ">
                            <div className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-5xl w-11/12 font-bold text-center md:text-left">
                                        Discover the Majesty of Nature
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        Explore the breathtaking vistas and awe-inspiring landscapes of one of the world's most iconic natural wonders.
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[calc(100vh-88px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/Zq3SxC4y/img2-wallspic-com-reflection-apple-macbook-pro-sky-mountain-lake-2560x1440.jpg)` }}>
                        <div className="bg-black md:w-1/2 h-full bg-opacity-60 ">
                            <div className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-5xl w-11/12 font-bold text-center md:text-left">
                                        Immerse Yourself in Natural Beauty
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        Experience the pristine wilderness and majestic mountains of Canada's oldest national park.
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[calc(100vh-88px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/R0CFtfYg/pexels-rodolfoclix-1203565.jpg)` }}>
                        <div className="bg-black md:w-1/2 h-full bg-opacity-60 ">
                            <div className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-5xl w-11/12 font-bold text-center md:text-left">
                                        Feel the Power of Nature
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        Witness the sheer magnitude and raw beauty of one of the world's most spectacular waterfalls.
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[calc(100vh-88px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/BZNGpW9N/145.jpg)` }}>
                        <div className="bg-black md:w-1/2 h-full bg-opacity-60 ">
                            <div className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-5xl w-11/12 font-bold text-center md:text-left">
                                        Step Back in Time
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        Explore the ancient ruins of a UNESCO World Heritage site and uncover the mysteries of the Mayan civilization.
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
                </SwiperSlide>

            </Swiper>
        </div >
    );
};

export default Banner;