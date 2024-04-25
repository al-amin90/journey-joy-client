import { SiFireship } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';

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
                {/* slider 1  */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between gap-10 items-center">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                                <div className="font-semibold border pr-4 border-[#81BCFB] w-fit rounded-full bg-[#0D396A] text-white mb-3 text-center md:text-left flex items-center">
                                    <div className="bg-[#2BA2FF] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                                        <SiFireship />
                                    </div>
                                    Top Brands
                                </div>

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                    Discover the Future <br />
                                    of Electronics
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Stay ahead with the latest tech trends and innovations.
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
                            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;