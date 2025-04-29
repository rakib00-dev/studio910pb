import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { sliderSettings } from '../utils/swiperSettings';

const data = [
  '/images/grow-bussiness/DINING_TO_LIVING-1024x683.jpg',
  '/images/grow-bussiness/DRONE_STRAIGHT-1024x683.jpg',
  '/images/grow-bussiness/LIVINGuse_184-1024x683.jpg',
  '/images/grow-bussiness/Photo-Apr-09-2024-6-26-32-PM-1024x683.jpg',
  '/images/grow-bussiness/Photo-Dec-09-2023-6-05-54-PM-8-1024x683.jpg',
  '/images/grow-bussiness/LIVINGuse_184-1024x683.jpg',
];

const GrowBussiness = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper">
        <div className="pt-5 pb-20 grid gap-5 uppercase">
          <h1 className="text-center text-[1.8rem] md:text-[2.5rem] font-light leading-12">
            Reflecting the{' '}
            <span style={{ color: 'var(--primary-blue)' }}>aspirations</span>{' '}
            <br /> of the modern buyer
          </h1>
        </div>
        <Swiper
          {...sliderSettings}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper flex justify-center items-center mx-40"
        >
          {data.map((src, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={src} alt="company card" width={140} className="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GrowBussiness;
