import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { sliderSettings } from '../utils/swiperSettings';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const data = [
  {
    desc: `I can’t speak highly enough of this team. If you are looking to elevate your business, this is the team for you! Studio910 is not your typical real estate photography/video group, this is a full service cinema grade production crew that will wow you with their results. They went to the ends of the earth to get the right shots, but the finished product was incredible! Take your business to the next level, and do right by your clients with Studio910!`,
    name: 'Anne LoGiudice',
    position: 'Luxury Home Magazine',
  },
  {
    desc: `We’ve had the pleasure of working with Claudio on a few luxury properties, and are always very impressed by he and his team’s attention to detail, crispness of the photos, and other marks of a professional luxury photographer. His videos and podcasts are also top notch.
As an added bonus, Claudio and his team are great to work with. Highly recommend.`,
    name: 'Curtis Bennett',
    position: 'Coldwell Banker',
  },
  {
    desc: `Studio 910 real estate photography, led by Claudio, went above and beyond, turning the experience into an exceptional one. Claudio’s meticulous approach sets him apart from other photographers, ensuring a level of quality and perfection that is truly outstanding. The behind-the-scenes team’s wizardry in editing is nothing short of magical; they effortlessly transformed a less-than-ideal sky into a picturesque backdrop. I wholeheartedly recommend Studio 910 to my colleagues without hesitation.`,
    name: 'Melanie Barre',
    position: 'Sothebys International Realty',
  },
  {
    desc: `The best in the business! I highly recommend to everyone to use you. There is simply no one better than you!
    Your videos have grown my social media in a big way!`,
    name: 'Rob Thomson',
    position: 'Waterfront Properties',
  },
];

const Testimonial = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper pb-20">
        <Swiper
          {...sliderSettings}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper flex justify-center items-center "
        >
          {data.map((data, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center w-full "
            >
              <div className="flex flex-col justify-between items-center h-[38rem] w-full bg-[#171717] p-10 text-left gap-15">
                <p className="text-[1rem] text-gray-400">{data.desc}</p>
                <div className="w-full">
                  <h4 className="">{data.name}</h4>

                  <h5 className="text-gray-400">{data.position}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SliderButtons />
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-start items-center gap-5 mt-10">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="border rounded-full p-6 cursor-pointer "
      >
        <FaLongArrowAltLeft className="text-2xl" />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className="border rounded-full p-6 cursor-pointer "
      >
        <FaLongArrowAltRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Testimonial;
