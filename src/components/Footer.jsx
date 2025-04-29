import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="py-20 overflow-hidden">
        {/* wait list */}
        <div className="wrappergrid place-items-center gap-5 pb-10 md:pb-20">
          <h1 className="text-center text-[2.4rem] md:text-[4rem] uppercase ">
            The 10 Laws of Branding
          </h1>
          <p className="uppercase text-xl text-center w-[95%] md:w-1/2">
            Sign Up and we’ll send you a copy of the{' '}
            <span className="italic">exclusive</span> ’10 Laws of Branding.’
            Transform your brand into a force to be reckoned with.
          </p>
          <form
            action=""
            className="wrapper flex flex-col md:flex-row w-full gap-5"
          >
            <div className="w-full">
              <label htmlFor="name" className="uppercase">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="border-b px-2 py-4 w-full outline-none"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border-b px-2 py-4 w-full outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="transtion-all duration-300 flex justify-center relative uppercase py-3 px-2 border font-medium jumpHover hover:bg-white hover:text-black md:w-[36rem] h-full text-center cursor-pointer md:top-8"
            >
              join wait list
            </button>
          </form>
        </div>
        {/* water fall view */}
        <img
          src="/images/footer/24-web-or-mls-DSC09153.jpg"
          alt=""
          loading="lazy"
          className="relative w-full bottom-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
