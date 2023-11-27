import React from 'react'
import datas from '../data'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Services() {

  return (
<Zoom>
    <div id='services' className='flex flex-col  h-fit md:h-[88rem] lg:h-[63rem]'>
      <div class="text-center ">
        <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500  ">Nos Services</h3>
        <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500">
          <b>Meilleure Services Client</b></h2>
      </div>

      <div className='w-[68%] ml-auto mr-auto mt-3 grid grid-cols-1 gap-6
       items-center justify-items-center sm:grid-cols-2 sm:gap-4 sm:justify-content-center
        sm:content-start lg:grid-cols-3 lg:gap-8 lg:mb-12'>
        
          {datas.map((e)=>{
            return   <div key={e.id} className='w-[17rem]
            flex flex-col h-full shadow-xl'>
            <img  src={`${e.picture}.jpg`} alt="" className='w-[16rem] mt-3 h-[15rem] rounded-lg mr-auto ml-auto' />
            <h3  className='font-semibold text-[23px] mt-2 ml-3'>{e.title}</h3>
            <p   className='ml-3 mr-3 text-[21px] mb-3'> {e.content} </p>
          </div>
          })}
         </div>
    </div>
    </Zoom>
  )
}

export default Services
