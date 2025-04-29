import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { sliderSettings } from '../utils/swiperSettings';

const data = [
  '/images/company-carousel/Christian-Angle-Logo.png',
  '/images/company-carousel/Compass-Logo-good.png',
  '/images/company-carousel/corcoran-logo.svg',
  '/images/company-carousel/Eklund-Gomez1.svg',
  '/images/company-carousel/Sothebys_logo-Good.png',
];

const CompanyCarousel = () => {
  return (
    <section className="sectionWidth bg-white">
      <div className="wrapper bg-white py-15 w-4/5 mx-auto">
        <Swiper
          {...sliderSettings}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper flex justify-center items-center"
        >
          {data.map((src, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  src={src}
                  alt="company card"
                  width={200}
                  className="scale-70 h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* <SliderButtons /> */}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default CompanyCarousel;
