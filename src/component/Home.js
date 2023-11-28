import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

    <div id='home' className='w-[100%]  
   h-full mt-[1.8rem]   md:mt-[4.5rem] flex flex-col md:flex-row  justify-center  '>

      <div className='w-[100%] md:w-[32rem] h-fit md:mt-[5rem] md:ml-6 lg:ml-[8%]  '>
        <h1 className='text-xl font-bold text-center mt-[1rem] text-transparent md:text-left lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> Cohésion, Création, Conquête
          C'est L'action de
          TF-SOL </h1>
        <p className='w-[20rem] hidden md:block font-semibold mt-2'>votre partenaire privilégié pour la création
          d'événements exceptionnels et mémorables.</p>

        <button type="button" class="mt-2 text-white  hover:bg-[#24292F]/90 focus:ring-4 
focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2 text-center
  items-center dark:focus:ring-gray-500  mr-2 mb-2
 bg-indigo-500 hover:bg-indigo-800 hidden md:block">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
          Contacter Nous
          </Link>
        </button>
      </div>

      <div className='lg:w-[25rem] ml-auto mr-auto mt-[1rem]  lg:h-[25rem] flex  flex-row gap-1 md:mr-5'>
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
</Zoom>
  )
}

export default Home
