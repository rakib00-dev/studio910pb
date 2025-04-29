import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="">
      <div className="pt-20 overflow-hidden">
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
        {/* social links */}
        <div className="grid gap-15 py-25 wrapper">
          <div className="flex justify-center items-center gap-6 border-b pb-15">
            <a
              href=""
              className="transition-all duration-300 p-4 rounded-full border text-xl jumpHover cursor-pointer"
            >
              <FaFacebook className="" />
            </a>
            <a
              href=""
              className="transition-all duration-300 p-4 rounded-full border text-xl jumpHover cursor-pointer"
            >
              <FaYoutube className="" />
            </a>
            <a
              href=""
              className="transition-all duration-300 p-4 rounded-full border text-xl jumpHover cursor-pointer"
            >
              <FaSpotify className="" />
            </a>
            <a
              href=""
              className="transition-all duration-300 p-4 rounded-full border text-xl jumpHover cursor-pointer"
            >
              <FaPhoneAlt className="" />
            </a>
            <a
              href=""
              className="transition-all duration-300 p-4 rounded-full border text-xl jumpHover cursor-pointer"
            >
              <FaInstagram className="" />
            </a>
          </div>
          <div className="text-xs flex justify-between items-center">
            <p className="">
              Copyright © {new Date().getFullYear()} Studio 910 PB
            </p>
            <div>
              <a href="" className="hover:underline cursor-pointer">
                910 Academy
              </a>
              <a href="" className="hover:underline cursor-pointer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper relative footerImgText grid place-items-center">
          <div className="absolute inset-0  bg-[#181715a7]"></div>
          <div className="grid place-items-center z-10">
            <h2 className="text-center text-[1.5rem] md:text-[2.5rem] font-light leading-8 md:leading-12 uppercase">
              Discover our Excellence
            </h2>
            <a
              href="https://studio910pb.com/contact/"
              className="transition-all duration-300 text-white hover:text-[#bbb] capitalize flex gap-2 items-center border-b py-2 w-fit jumpHoverBottom text-center"
            >
              Experience 910 <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
