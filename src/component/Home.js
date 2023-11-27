import React from 'react'

function Home() {
  return (
    <div id='home' className='w-[100%] lg:h-[30rem]  mt-[4.5rem] flex  justify-evenly'>

      <div className=' w-[32rem] h-fit mt-[5rem] ml-12 '>
        <h1 className='font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> Cohésion, Création, Conquête
          C'est L'action de
          TF-SOL </h1>
        <p className='w-[20rem] font-semibold mt-2'>votre partenaire privilégié pour la création
          d'événements exceptionnels et mémorables.</p>

        <button type="button" class="mt-2 text-white  hover:bg-[#24292F]/90 focus:ring-4 
focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2 text-center
 inline-flex items-center dark:focus:ring-gray-500  mr-2 mb-2
 bg-indigo-500 hover:bg-indigo-800 ">
          Contacter Nous
        </button>
      </div>

      <div className='w-[25rem] h-[25rem] flex  flex-row gap-1 '>
        <div className='flex flex-col gap-1'>
          <img src="1.jpg" alt="" className='w-[12rem] h-[12rem] rounded-lg' />
          <img src="5.jpg" alt="" className='w-[12rem] h-[14rem] rounded-lg' />

        </div>
        <div className='flex flex-col gap-1'>
          <img src="3.jpg" alt="" className='w-[12rem] h-[14rem] rounded-lg' />
          <img src="4.jpg" alt="" className='w-[12rem] h-[12rem] rounded-lg' />

        </div>


      </div>

    </div>
  )
}

export default Home
