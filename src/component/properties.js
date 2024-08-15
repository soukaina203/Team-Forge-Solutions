import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import { HiOutlineMapPin } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import { GiStarsStack } from "react-icons/gi";

function Properties() {
  const Props = [
    { title: "d'experience reconue", years: "10 ans", icon: <GiStarsStack className='w-10 text-purple-500 h-14' /> },
    { title: "Cabinets d'excellence", years: "7 ", icon: <HiOutlineMapPin className='w-10 text-purple-500 h-14' /> },
    { title: "expertises pour vous accoumpagner", years: "10", icon: <GrUserExpert className='w-8 text-purple-500 h-14' /> },
    { title: "collaboration a votre service ", years: "20", icon: <GrGroup className='w-8 text-purple-500 h-14' /> },
  ]
  return (
    <div className="flex items-center justify-center w-full h-full py-8" key="key">
      <div
     className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        {Props.map((e) => {
          return (
            <div key={e.id} className=' h-full max-w-md gap-2 flex hover:-translate-y-1n hover:shadow-xl transition-all hover:scale-110  cursor-pointer  duration-300  p-6 
            translate-y-[-50%] transform bg-[#FEFEFE] shadow-lg  pb-4 mx-auto my-auto   '>
              {e.icon}
              <div className='flex flex-col  w-[12rem]'>
                <h1 className='text-3xl font-bold '>{e.years}</h1>
                <h3 className='font-normal text-gray-600'>{e.title}</h3>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Properties

