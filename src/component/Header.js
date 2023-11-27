import React from 'react'
import { Link } from 'react-scroll'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
       <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg shadow-purple-200">
      <div className="container flex items-center justify-between m-auto ">
        <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold text-transparent cursor-pointer md:ml-0 flew-row bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          TF-SOL
        </h1>
        <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto" > <Link to="home" smooth={true} offset={-100} duration={500}>  Acceuil </Link> </li>
          <li className="px-6 py-4 duration-500 underlineHover" > <Link to="mission" smooth={true} offset={-100} duration={500}>  Mission </Link> </li>
          <li className="px-6 py-4 duration-500 underlineHover" > <Link to="services" smooth={true} offset={-100} duration={500}>  Services </Link> </li>
          <li className="px-6 py-4 duration-500 underlineHover" > <Link to="contact" smooth={true} offset={-100} duration={500}>  Contact </Link> </li>
        </ul>
    

        {/* phone & tablet */}
        <button className=" lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />



          <div className="absolute top-0 w-8/12 h-screen ml-auto mr-auto transition-all duration-500 bg-purple-200 opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center pr-10 mt-12 text-base font-semibold cursor-pointer">
              <li className="w-full px-6 py-4 duration-500 ">
                <Link to="home" smooth={true} duration={400}>
                  Home
                </Link>
              </li>
             
              <li className="w-full px-6 py-4 duration-500">
                <Link to="mission" smooth={true} offset={-200} duration={400}>
                Mission
                </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500">
                <Link to="services" smooth={true} offset={-200} duration={400}>
                Services
                </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500">
                <Link to="contact" smooth={true} offset={-200} duration={400}>
                Contact
                </Link>
              </li>
            </ul>
          </div>
         

        </button>

      </div>
    </nav>
    </div>
  )
}

export default Header
