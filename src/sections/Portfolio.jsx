import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import Slider from '../components/Slider';
import { portfolio_sw1, portfolio_sw2 } from '../constants';
import BackgroundObject from '../components/BackgroundObject';

const Portfolio = () => {
    return (
        <section className=" my-36">
            <Element name="portfolio" className=" relative">
                <div className="container-full">
                    <div className=" flex items-center mb-[18px]">
                        <img src="/images/advantage.png" alt="Icon" />
                        <h3 className=" ml-5 h3">Портфолио</h3>
                    </div>
                </div>
                <div className="container-full-l">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={2.5}
                        loop={true}
                        speed={10000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        freeMode={{
                            enable: true,
                            momentum: false,
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[FreeMode, Autoplay]}
                    >
                        {portfolio_sw1.map(({ id, src, alt }) => (
                            <SwiperSlide key={id}>
                                <Slider src={src} alt={alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container-full-r">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={2.5}
                        loop={true}
                        speed={10000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        freeMode={{
                            enable: true,
                            momentum: false,
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[FreeMode, Autoplay]}
                    >
                        {portfolio_sw2.map(({ id, src, alt }) => (
                            <SwiperSlide key={id}>
                                <Slider src={src} alt={alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className=" absolute top-[80%] z-0 left-[70%] w-[340px] pointer-events-none">
                    <img
                        src="/images/bg-item.png"
                        className=" max-lg:h-auto rotate-12"
                        alt="image-bg"
                    />
                </div> */}
                <div>
                    <BackgroundObject baseSpeed={0.2} />
                </div>
            </Element>
        </section>
    );
};

export default Portfolio;
