import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect


function Mission() {
  const missions = [
    { title: "Créativité Inégalée", content: "Touche unique à chaque événement, repoussant constamment les limites.", icon: "icon1" },
    { title: "Professionnalisme", content: "Engagement envers un service de qualité exceptionnelle de la  planification à l'exécution.", icon: "icon2" },
    { title: "Personnalisation", content: "Conception sur mesure pour refléter le style, la vision, et atteindre les objectifs de chaque client.", icon: "icon3" },
  ]

  return (
       <Zoom>{/*Using Zoom Effect*/}
    <div id='mission' className='flex flex-col  h-[55rem] md:h-[40rem]   lg:h-[30rem] mt-6 '>
      <div class="text-center ">
        <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500 lg:mt-[3.5rem]">Notre Mission</h3>
        
        <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500 "><b>Meilleure Expérience Client</b></h2>
      </div>
      <div className='w-[68%] ml-auto mr-auto mt-3 grid grid-cols-1 gap-6
       items-center justify-items-center sm:grid-cols-2 sm:gap-4 sm:justify-content-center
        sm:content-start lg:grid-cols-3 lg:gap-8 lg:mb-12'>
  {missions.map((e) => {
    return (
      <div key={e.title} className='w-[16rem] flex flex-col h-full shadow-xl'>
        <img src={`${e.icon}.png`} key={e.title} alt="" className='text-orange-500 mt-2 w-[2.8rem] h-[2.8rem] mx-auto' />
        <h3 key={e.title} className='font-bold text-center mt-2 lg:mt-[0.7rem] lg:text-xl'>{e.title}</h3>
        <p key={e.title} className="text-[21px] w-[14rem] mb-4 mx-auto mt-2 text-center">{e.content}</p>
      </div>
    );
  })}
</div>

    </div>
      </Zoom>

  )
}

export default Mission
