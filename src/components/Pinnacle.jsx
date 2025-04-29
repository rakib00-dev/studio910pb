import { FaGreaterThan } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Pinnacle = () => {
  return (
    <section className="relative pinnacleSection w-full h-full">
      <div className="sectionWidth">
        <div className="absolute inset-0  bg-[#22211da7]"></div>
        <div className="wrapper py-15 md:py-30 grid md:grid-cols-2 w-full gap-10">
          <div className="relative z-10 uppercase">
            <h1 className="text-[1.8rem] md:text-[2.5rem] font-light leading-8 md:leading-12">
              This is the{' '}
              <span style={{ color: 'var(--primary-blue)' }}>pinnacle</span>
              <br /> of real estate media.
            </h1>
          </div>
          <div className="grid z-10 md:pl-5 w-full gap-6">
            <p className="text-xl  text-[#bbb]">
              Discover the world of what real estate media was meant to be. Our
              work speaks for itself.
            </p>

            <a
              href="https://studio910pb.com/portfolio/"
              className="transition-all duration-300 text-white hover:text-[#bbb] capitalize flex gap-2 items-center border-b py-2 w-fit jumpHover"
            >
              our portfolio <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pinnacle;
