import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; 
import Properties from './properties';

function Home() {
  return (
    <Zoom>
      <section id='home' className=' flex flex-col p-4 md:h-[26rem]  lg:h-screen  '>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="p-4 mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-[2.6rem] font-extrabold 
            leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl md:text-left lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Cohésion, Création, Conquête
              C'est L'action de
              TF-SOL</h1>
            <p className="max-w-xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl ">
              Votre partenaire privilégié pour la création
              d'événements exceptionnels et mémorables.
            </p>

            <button className="relative mb-2 md:mb-0 overflow-hidden border-purple-500  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-purple-500 transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-purple-500 before:duration-300 hover:text-white hover:shadow-purple-500 hover:before:h-64 hover:before:-translate-y-32">
              <Link to="contact" smooth={true} offset={-200}
                duration={600} >
                <span className='relative z-10 font-bold'>
                  Contacter Nous

                </span>
              </Link>
            </button>
            <button className="relative overflow-hidden border-pink-500  hover:cursor-pointer  px-7 py-3
            md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-pink-500 transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-pink-500 before:duration-300 hover:text-white hover:shadow-pink-500 hover:before:h-64 hover:before:-translate-y-32">
              <Link to="services" smooth={true} offset={-200}
                duration={600}
              >
                <span className='relative z-10 font-bold'>
                  Nos Services
                </span>
              </Link>
            </button>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5  lg:flex gap-2 p-[3rem]">
            <img src="lan1.png" alt="" />

          </div>
        </div>

        <Properties />
      </section>
    </Zoom>
  )
}

export default Home
