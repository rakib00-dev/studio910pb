import { useEffect, useRef, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const NavLists = ({ className }) => {
    return (
      <>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 text-white hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 text-white hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#">About</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 text-white hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#">Podcasts</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 text-white hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#">Portfolio</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 text-white hover:text-yellow-500 md:text-lg ${className}`}
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
        className="m-auto transition-all duration-700 top-0 z-20 fixed w-full"
        id="navBarFix"
        // ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-between items-center px-6 py-4  border border-gray-500 p-4 w-full overflow-hidden lg:py-0.5 bg-black"
        >
          <div className="flex justify-betweene items-center w-full gap-6 min-[375px]:gap-14 min-[440px]:gap-22 min-[550px]:gap-35 min-[695px]:gap-45 md:gap-60 lg:gap-80 xl:gap-115 2xl:gap-125">
            <div id="logo" className="text-md font-medium w-80 md:text-lg">
              <a href="#" className="flex items-center">
                <img
                  src="/images/Studio-910-Logobluewhite.svg"
                  alt=""
                  className="h-4 w-4 mr-2"
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
                <ul className="flex justify-center items-center gap-7">
                  <NavLists className={'hoverUnderLine'} />
                </ul>
              </div>
            </OutsideClickHandler>
            <div
              className="lg:hidden"
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl" />
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
