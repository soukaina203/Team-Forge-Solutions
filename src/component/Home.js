import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

    <div id='home' className='z-0 flex h-full p-4'>

<div className='grid max-w-screen-xl px-4 py-8 mx-auto place-content-center lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 '> 



      <div className='mr-auto place-self-center md:col-span-7 '>
        <h1 className=' font-bold  mt-[1rem] 
        text-transparent md:text-left text-3xl 
        lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> Cohésion, Création, Conquête
          C'est L'action de
          TF-SOL </h1>
        <p className=' max-w-2xl text-[19px]  font-normal text-gray-500 mb-2 md:text-lg lg:text-xl dark:text-gray-400 
        w-[20rem]   md:font-semibold md:text-black mt-2'>Votre partenaire privilégié pour la création
          d'événements exceptionnels et mémorables.</p>

        <button type="button" class=" text-white  font-medium  hover:bg-[#24292F]/90 focus:ring-4 
focus:outline-none focus:ring-[#24292F]/50  rounded-lg text-md px-5 py-2 text-center
  items-center dark:focus:ring-gray-500  mr-2 mb-2
 bg-indigo-500 hover:bg-indigo-800 hidden md:block">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
          Contacter Nous
          </Link>
        </button>
      </div>



      <div className='hidden lg:mt-0 md:col-span-5 md:flex  gap-1 md: mt-[1rem]'>
        <div className='flex flex-col gap-1'>
          <img src="1.jpg" alt="" className='w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-lg' />
          <img src="5.jpg" alt="" className=' w-[9rem] h-[11rem] lg:w-[12rem] lg:h-[14rem] rounded-lg' />

        </div>
        <div className='flex flex-col gap-1'>
          <img src="3.jpg" alt="" className=' w-[9rem] h-[11rem] lg:w-[12rem] lg:h-[14rem] rounded-lg' />
          <img src="4.jpg" alt="" className=' w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-lg' />

        </div>


      </div>
      </div>

    </div>
</Zoom>
  )
}

export default Home
