import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Team() {
  return (
    <Zoom>
      <div id='team' className='flex justify-between from-indigo-200 via-purple-200 to-pink-200 text-center  items-center h-[20rem] lg:h-[28rem] mt-6 bg-gradient-to-r
        '>

        <div className='flex-col hidden gap-3 lg:flex'>
          <img
            src="t1.jpg"
            alt=""
            className="w-[13rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto transform  translate-x-4  rotate-[12deg] "
          />
          <img src="t5.jpg" alt="" className='w-[13rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto rotate-[12deg]' />

        </div>

        <div class="text-center w-full max-w-sm md:max-w-md lg:max-w-xl  mr-auto ml-auto ">
          <h3 class="text-[21px] md:text-[28px] font-bold text-purple-500 lg:mt-[3.5rem]">Team Building :</h3>

          <h2 class="text-xl md:text-2xl   lg:text-4xl text-indigo-500 "><b>notre priorité c’est l’atmosphère de votre événement !
          </b></h2>

        </div>
        <div className='flex-col hidden lg:flex'>
          <img
            src="t3.jpg"
            alt=""
            className="w-[13rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto transform  translate-x-4 rotate-[12deg] "
          />
          <img src="t4.jpg" alt="" className='w-[13rem] mt-3 h-[10rem] rounded-lg mr-auto ml-auto rotate-[12deg]' />

        </div>
      </div>

    </Zoom>
  )
}

export default Team
