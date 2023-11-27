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
      <div className='w-[100%] h-[71rem] mt-3 flex flex-col items-center gap-6
 md:flex-row md:flex-wrap md:justify-center md:content-start  md:h-[49rem]
 lg:gap-[2rem] lg:h-[24rem]
 lg:mb-[3rem]'>
        {missions.map((e) => {
          return <div key={e.title} className=' w-[16rem]   h-[14rem] shadow-xl'>
            <img src={`${e.icon}.png`} key={e.title} alt="" className='text-orange-500 mt-2 w-[2.8rem] h-[2.8rem] ml-auto mr-auto ' />
            <h3  key={e.title} className=' font-bold  text-center mt-2 lg:mt-[0.7rem]  lg:text-xl'>{e.title}</h3>
            <p  key={e.title} className=" text-[23px] w-[14rem] 5 ml-auto mr-auto mt-2 text-center">{e.content}</p>
          </div>
        })}

      </div>
    </div>
      </Zoom>

  )
}

export default Mission
