import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="z-50 w-full bg-white ">
        <div className="container flex items-center justify-between m-auto ">
          <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold text-transparent cursor-pointer md:ml-0 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            TF-SOL
          </h1>
          <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer lg:flex">
            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto">
              <Link to="home" smooth={true} offset={-100} duration={500}>Accueil</Link>
            </li>
            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto">
              <Link to="about" smooth={true} offset={-100} duration={500}>À Propos</Link>
            </li>
            <li className="flex px-6 py-4 duration-500 underlineHover" onClick={toggleDropdown} ref={dropdownRef}>
              <span>Mission</span>
              <span className='mt-1 ml-1'>
                <IoIosArrowDown />
              </span>
              {isOpen && (
                <ul className="absolute z-10 w-36 py-2 bg-white shadow-lg mt-[2rem]">
                  <li className="px-6 py-4 duration-500 underlineHover">
                    <Link to="team" smooth={true} offset={-100} duration={500}>Team</Link>
                  </li>
                  <li className="px-6 py-4 duration-500 underlineHover">
                    <Link to="services" smooth={true} offset={-100} duration={500}>Services</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="px-6 py-4 duration-500 underlineHover">
              <Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link>
            </li>
          </ul>

          {/* phone & tablet */}
          <button className="lg:hidden group ">
            <GiHamburgerMenu className="mr-5 text-2xl" />
            <div className="fixed top-0 z-40 flex items-center w-8/12 h-screen ml-auto mr-auto text-white transition-all duration-500 bg-indigo-900 opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
              <ul className="flex flex-col items-center justify-center w-[98%] font-semibold m-2">
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="home" smooth={true} duration={400}>Accueil</Link>
                </li>
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="about" smooth={true} duration={400}>À Propos</Link>
                </li>
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="mission" smooth={true} offset={-200} duration={400}>Mission</Link>
                </li>
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="team" smooth={true} offset={-200} duration={400}>Team</Link>
                </li>
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="services" smooth={true} offset={-200} duration={400}>Services</Link>
                </li>
                <li className="w-full px-6 py-4 uppercase duration-500 rounded-lg hover:bg-purple-700">
                  <Link to="contact" smooth={true} offset={-200} duration={400}>Contact</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
