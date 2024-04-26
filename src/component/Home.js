import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}
          <section className="  mt-[4rem] lg:mt-[3rem] md:mb-[9rem] ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="p-4 mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl md:text-left lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Cohésion, Création, Conquête
              C'est L'action de
              TF-SOL</h1>
            <p className="max-w-xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl ">
              Votre partenaire privilégié pour la création
              d'événements exceptionnels et mémorables.
            </p>
            <Link to="contact" smooth={true} offset={-200} 
            duration={600} className="inline-flex hover:cursor-pointer items-center justify-center 
            px-5 py-3 mr-3 text-base font-medium text-center text-gray-500 border-2
             border-purple-500 rounded-lg bg-primary-700 hover:bg-primary-800  md:border-2 rounded-tl-[206.22px] rounded-br-[206px]
             focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Contacter Nous
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link to="services"  smooth={true} offset={-200} 
            duration={600} className="inline-flex items-center hover:cursor-pointer first-letter:justify-center px-5 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-base font-medium text-center text-white bg-indigo-500 ">
              Nos Services           </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex gap-2 p-[3rem]">
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
            <div className='flex flex-col gap-2'>
              <img src="1.jpg" alt="" className='w-[9rem] h-[9rem] lg:w-[14rem] lg:h-[14rem] rounded-lg' />
              <img src="5.jpg" alt="" className=' w-[9rem] h-[11rem] lg:w-[14rem] lg:h-[16rem] rounded-lg' />

            </div>
            <div className='flex flex-col gap-2'>
              <img src="3.jpg" alt="" className=' w-[9rem] h-[11rem] lg:w-[14rem] lg:h-[16rem] rounded-lg' />
              <img src="4.jpg" alt="" className=' w-[9rem] h-[9rem] lg:w-[14rem] lg:h-[14rem] rounded-lg' />

            </div>
          </div>
        </div>
      </section>
    </Zoom>
  )
}

export default Home
