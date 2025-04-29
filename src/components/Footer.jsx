import React from 'react';

const Footer = () => {
  return (
    <footer className="sectionWidth">
      <div className="wrapper py-20">
        {/* wait list */}
        <div className="grid place-items-center gap-5">
          <h1 className="text-center text-[2.4rem] md:text-[4rem] uppercase ">
            The 10 Laws of Branding
          </h1>
          <p className="uppercase text-xl text-center w-[95%] md:w-1/2">
            Sign Up and we’ll send you a copy of the{' '}
            <span className="italic">exclusive</span> ’10 Laws of Branding.’
            Transform your brand into a force to be reckoned with.
          </p>
          <form action="" className="flex w-full gap-5">
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
            <a
              href="https://studio910pb.com/about/"
              className="transtion-all duration-300 uppercase flex justify-start py-3 px-6 border font-medium jumpHover hover:bg-white hover:text-black w-fit"
            >
              about studio 910
            </a>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
