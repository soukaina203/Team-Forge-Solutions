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
      <div id='mission' className='flex flex-col h-full mt-6 '>

        <div class="text-center ">
          <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500 lg:mt-[3.5rem]">Notre Mission</h3>

          <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500 "><b>Meilleure Expérience Client</b></h2>
        </div>

        <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform place-content-center md:p-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-5 gap-y-5 '>
          {missions.map((e) => {
            return (
              <div key={e.id} className='h-full max-w-sm lg:p-[3.5rem] pb-6 mx-auto my-auto duration-300 transform shadow-md cursor-pointer p-7 hover:-translate-y-1n hover:shadow-xl'>

                <img src={`${e.icon}.png`} key={e.title} alt="" className=' mt-2 w-[3.7rem] h-[3.7rem] mx-auto' />
                <h3 key={e.title} className='font-bold text-center text-[19px]  mt-2 lg:mt-[0.7rem] lg:text-[1.6rem] '>{e.title}</h3>
                <p key={e.title}
                  className=" md:text-[19px] lg:text-[19px] w-[15rem] text-gray-700 mb-4 mx-auto mt-2 text-center">{e.content}</p>
              </div>
            );
          })}
        </div>

      </div>
    </Zoom>

  )
}

export default Mission
