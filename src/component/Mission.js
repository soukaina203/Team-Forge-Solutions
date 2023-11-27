import React from 'react'


function Mission() {
  const missions = [
    { title: "Créativité Inégalée", content: "Touche unique à chaque événement, repoussant constamment les limites.", icon: "icon1" },
    { title: "Professionnalisme", content: "Engagement envers un service de qualité exceptionnelle de la  planification à l'exécution.", icon: "icon2" },
    { title: "Personnalisation", content: "Conception sur mesure pour refléter le style, la vision, et atteindre les objectifs de chaque client.", icon: "icon3" },
  ]

  return (
    <div id='mission' className='flex flex-col  h-[30rem] mt-6 '>
      <div class="text-center ">
        <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500 ">Notre Mission</h3>
        <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500 "><b>Meilleure Expérience Client</b></h2>
      </div>
      <div className='flex justify-center  mt-[3rem]  gap-[4rem]'>
        {missions.map((e) => {
          return <div key={e.title} className=' w-[16rem]  h-[16rem] '>
            <img src={`${e.icon}.png`} alt="" className='text-orange-500  w-[2.8rem] h-[2.8rem] ml-auto mr-auto ' />
            <h3 className=' font-bold  text-center mt-2 lg:mt-[0.7rem]  lg:text-xl'>{e.title}</h3>
            <p className=" text-[23px] w-[14rem] 5 ml-auto mr-auto mt-2 text-center">{e.content}</p>
          </div>
        })}

      </div>
    </div>

  )
}

export default Mission
