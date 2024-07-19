import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Team() {
  return (
    <Zoom>
      <div id='team' className='flex justify-between from-indigo-200 via-purple-200 to-pink-200 text-center  items-center h-[20rem] lg:h-[37rem] mt-6 bg-gradient-to-r
        '>

    

        <div class="text-center w-full max-w-sm md:max-w-md lg:max-w-full  mr-auto ml-auto ">
          {/* <h3 class="text-[21px] md:text-[28px] lg:text-[2.1rem] font-bold text-purple-500 lg:mt-[3.5rem]">Team Building :</h3> */}

          <h2 class="text-xl md:text-2xl   lg:text-5xl text-indigo-500 uppercase "><b>notre priorité c’est l’atmosphère de votre événement !
          </b></h2>

        </div>
        <div className='flex-col hidden lg:flex'>
  
        </div>
      </div>

    </Zoom>
  )
}

export default Team
