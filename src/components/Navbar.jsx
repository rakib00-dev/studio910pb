import { useEffect, useRef, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const NavLists = ({ className }) => {
    return (
      <>
        <li
          className={`relative py-4 uppercase text-md flex font-medium cursor-pointer transition-all duration-500 text-white ${className}`}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={`relative py-4 uppercase text-md flex font-medium cursor-pointer transition-all duration-500 text-white ${className}`}
        >
          <a href="#">About</a>
        </li>
        <li
          className={`relative py-4 uppercase text-md flex font-medium cursor-pointer transition-all duration-500 text-white ${className}`}
        >
          <a href="#">Podcasts</a>
        </li>
        <li
          className={`relative py-4 uppercase text-md flex font-medium cursor-pointer transition-all duration-500 text-white ${className}`}
        >
          <a href="#">Portfolio</a>
        </li>
        <li
          className={`relative py-4 uppercase text-md flex font-medium cursor-pointer transition-all duration-500 text-white ${className}`}
        >
          <a href="#">Contact</a>
        </li>
      </>
    );
  };

  // window onLoad Entry
  // const navBarFix = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     if (navBarFix.current) {
  //       navBarFix.current.style.top = '10px';
  //       navBarFix.current.style.opacity = '1';
  //     }
  //   });

  //   // header NavBar onScroll
  //   window.addEventListener('scroll', () => {
  //     const scrollValue = window.scrollY;
  //     if (scrollValue >= 82) {
  //       if (navBarFix.current) {
  //         navBarFix.current.style.top = '20px';
  //         navBarFix.current.style.position = 'sticky';
  //       }
  //     } else {
  //       if (navBarFix.current) {
  //         navBarFix.current.style.top = '5px';
  //         navBarFix.current.style.position = null;
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div
        className="m-auto transition-all duration-700 h-38 top-0 z-20 fixed w-full"
        id="navBarFix"
        // ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-between items-center w-full overflow-hidden lg:py-0.5 bg-black"
        >
          <div className="flex justify-between items-center w-full px-10">
            <div id="logo" className="text-md font-medium w-18 md:text-lg">
              <a href="#" className="flex items-center">
                <img
                  src="/images/Studio-910-Logobluewhite.svg"
                  alt=""
                  className="w-full"
                  loading="lazy"
                />
                Rakib Developer
              </a>
            </div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsNavOpen(false);
              }}
            >
              {/* large screen */}
              <div
                id="menu"
                className="hidden justify-between items-center w-full md:flex"
              >
                <ul className="flex justify-center items-center gap-10 tracking-[.1rem]">
                  <NavLists className={'listHover'} />
                </ul>
              </div>
            </OutsideClickHandler>
            <div
              className={!isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl text-white" />
            </div>
            <div
              className={isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
              onClick={() => {
                setIsNavOpen((prev) => prev);
              }}
            >
              <RxCross2 className="text-3xl text-white" />
            </div>
          </div>
        </nav>
      </div>

      {/* small screen */}
      <div
        id="menu"
        className={
          isNavOpen
            ? 'sticky float-end right-[10%] top-20 flex justify-between items-center flex-col w-fit p-5 gap-10 border rounded-md bg-orange-300 m-auto scale-x-100 z-1 md:hidden'
            : 'hidden'
        }
      >
        <ul className="flex justify-center items-center flex-col leading-0.5">
          <NavLists className={'sm:py-4'} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
