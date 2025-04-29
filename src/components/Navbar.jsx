import { useEffect, useRef, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const NavLists = ({ className }) => {
    return (
      <>
        {/* <li className="relative py-7 text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg">
            <a href="#skills-section">Skills</a>
          </li> */}
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#services">Services</a>
        </li>
        {/* <li className="relative py-7 text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg">
            <a href="#about-section">About</a>
          </li> */}
      </>
    );
  };

  const cssStyle = {
    blur: {
      position: 'absolute',
      height: '100%',
      left: 0,
      width: '100%',
      background: '#ffffff42',
      filter: 'blur(42px)',
      zIndex: '-1',
      backdropFilter: 'blur(2px)',
    },
  };

  // window onLoad Entry
  const navBarFix = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (navBarFix.current) {
        navBarFix.current.style.top = '10px';
        navBarFix.current.style.opacity = '1';
      }
    });

    // header NavBar onScroll
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        if (navBarFix.current) {
          navBarFix.current.style.top = '20px';
          navBarFix.current.style.position = 'sticky';
        }
      } else {
        if (navBarFix.current) {
          navBarFix.current.style.top = '5px';
          navBarFix.current.style.position = null;
        }
      }
    });
  }, []);

  return (
    <>
      <div
        className="m-auto transition-all duration-700 relative top-0 z-20"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-center items-center px-6 py-4 mt-5 border border-gray-500 p-4 rounded-full w-fit m-auto overflow-hidden md:w-fit lg:py-0.5"
        >
          <div className={''} style={cssStyle.blur}></div>
          <div className="flex justify-center items-center w-fit gap-6 min-[375px]:gap-14 min-[440px]:gap-22 min-[550px]:gap-35 min-[695px]:gap-45 md:gap-60 lg:gap-80 xl:gap-115 2xl:gap-125">
            <div id="logo" className="text-md font-medium w-42 md:text-lg">
              <a href="#" className="flex items-center">
                <img
                  src="./images/skills/js.png"
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
                className="hidden justify-between gap-10 items-center w-full lg:flex"
              >
                <ul className="flex justify-center items-center gap-7">
                  <NavLists className={'hoverUnderLine'} />
                </ul>
                <div id="contact">
                  <a
                    href="#footer"
                    className="text-lg py-2 px-4 bg-yellow-400 text-black font-medium rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
                  >
                    Contact
                  </a>
                </div>
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
            ? 'sticky float-end right-[10%] top-20 flex justify-between items-center flex-col w-fit p-5 gap-10 border rounded-md bg-orange-300 m-auto scale-x-100 z-1 lg:hidden'
            : 'hidden'
        }
      >
        <ul className="flex justify-center items-center flex-col leading-0.5">
          <NavLists className={'sm:py-4'} />
          <div id="contact" className="top-0 scale-85">
            <a
              href="#footer"
              className="text-lg py-2 px-4 bg-yellow-400 text-black font-semibold rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
            >
              Contact
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
