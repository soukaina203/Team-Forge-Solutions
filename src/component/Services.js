import React from 'react'
import datas from '../data'
function Services() {

  return (
    <div id='services' className='flex flex-col  h-[60rem] '>
      <div class="text-center ">
        <h3 class="text-[21px] md:text-[25px] font-bold text-purple-500  ">Nos Services</h3>
        <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500">
          <b>Meilleure Services Client</b></h2>
      </div>

      <div className='grid items-center w-[68%] mt-5 place-items-center grid-cols-1 md:grid-cols-2 gap-8 ml-auto mr-auto lg:grid-cols-3 '>
        
          {datas.map((e)=>{
            return   <div className='w-[14rem] h-[25rem] '>
            <img src={`${e.picture}.jpg`} alt="" className='w-[14rem] h-[15rem] rounded-lg mr-auto ml-auto' />
            <h3 className='font-semibold text-[22px] mt-2'>{e.title}</h3>
            <p> {e.content}
            </p>
          </div>
          })}
         </div>
    </div>
  )
}

export default Services
