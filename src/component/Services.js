import React from 'react'
import datas from '../data'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Services() {

  return (
<Zoom>
    <div id='services' className='flex flex-col h-full lg:mt-[5rem]'>
      <div class="text-center ">
        <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500 ">Nos Services</h3>
        <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500">
          <b>Meilleure Services Client</b></h2>
      </div>

      <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto duration-500 transform place-items-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-6 '>
        
          {datas.map((e)=>{
            return   <div key={e.id} className='h-full max-w-sm pb-6 mx-auto my-auto duration-300 transform shadow-md cursor-pointer hover:-translate-y-1n p-7 hover:shadow-xl'>
            <img  src={`${e.picture}.jpg`} alt="" className='w-[16rem] mt-3 h-[15rem] rounded-lg mr-auto ml-auto' />
            <h3  className='font-semibold text-center text-[19px] lg:text-[23px] mt-2 '>{e.title}</h3>
            <p   className=' text-center md:text-[19px] lg:text-[19px] mb-3'> {e.content} </p>
          </div>
          })}
         </div>
    </div>
    </Zoom>
  )
}

export default Services
