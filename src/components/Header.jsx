import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <>
      <header
        id="header-section"
        className="relative mt-[50px] max-w-7xl mx-auto pt-0 w-full overflow-hidden"
      >
        <div className="p-4 w-full py-6 flex justify-center flex-wrap flex-col m-auto gap-20 items-center md:gap-20 md:flex-row md:w-full">
          <div
            id="header-img"
            className="relative flex justify-center items-center h-[270px] w-[270px] rounded-full border border-gray-500/20 bg-white shadow overflow-hidden md:w-[28.125rem] md:h-[28.125rem] "
            style={{
              boxShadow: 'rgba(205, 205, 205, 0.52) 2px 2px 12px inset',
            }}
          >
            <img
              id="profile"
              src="./images/profile.png"
              alt=""
              className="h-[270px] mask-image-gradient md:h-[500px]"
              loading="lazy"
            />
          </div>

          <div id="header-para" className="w-full relative lg:w-[43%]">
            <h1
              className="text-4xl mb-0 mask-image-gradient leading-8 md:leading-16 md:text-5xl"
              style={{
                background: 'var(--header-gradient)',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: '500',
              }}
            >
              Hi, It's Rakib
            </h1>
            <h2 className="text-xl relative leading-12 md:text-3xl">
              {/* I'm a <span className="text-yellow-500">Website Developer</span> */}
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once,initially
                  'Website Developer',
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Website Designer',
                  2500,
                  'Javascript Developer',
                  2000,
                  'React Developer',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: 'inline-block',
                }}
                className={'text-yellow-500'}
                repeat={Infinity}
              />
            </h2>
            <p className="w-full text-md text-black">
              A website developer who loves to build websites. I specialize in
              creating responsive and user-friendly websites tailored to meet
              your unique needs. My services include website design, front-end
              and back-end development, and ongoing maintenance to ensure
              optimal performance.
            </p>
            <div id="contact" className="mt-10">
              <a
                href="#footer"
                className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full border-3 border-yellow-300 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
