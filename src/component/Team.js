import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Team() {
  return (
    <Zoom>
      <div id='team' className='flex justify-between from-indigo-200 via-purple-200 to-pink-200 text-center  items-center h-full lg:h-[28rem] mt-6 bg-gradient-to-r
        '>

        <div className=' hidden md:flex  gap-3'>
          <img
            src="t1.jpg"
            alt=""
            className="w-[12rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto transform  translate-x-6  rotate-[-12deg] "
          />
          <img src="t2.jpg" alt="" className='w-[12rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto rotate-[12deg]' />

        </div>

        <div class="text-center ">
          <h3 class="text-[21px] md:text-[28px] font-bold text-purple-500 lg:mt-[3.5rem]">Team Building :</h3>

          <h2 class="text-xl md:text-2xl lg:text-4xl text-indigo-500 "><b>notre priorité c’est l’atmosphère de votre événement !
          </b></h2>

        </div>
        <div className='hidden md:flex '>
          <img
            src="t3.jpg"
            alt=""
            className="w-[12rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto transform  translate-x-6  rotate-[-12deg] "
          />
          <img src="t4.jpg" alt="" className='w-[12rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto rotate-[12deg]' />

        </div>
      </div>

    </Zoom>
  )
}

export default Team
