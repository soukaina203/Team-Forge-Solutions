import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Contact() {
  const contact = [
    { id: 1, content: "0537485965", icon: <FaPhone className='text-[23px] ' /> },
    { id: 2, content: "info@teamforgesolutions.com", icon: <MdOutlineMail className='text-[28px]' /> },
    { id: 3, content: "Rabat Agdal", icon: <FaMapMarkerAlt className='text-[25px]' /> },
  ]
  return (
    <Zoom>
    <div id='contact' className='w-[100%] h-[20rem]  lg:h-[8rem] flex lg:items-center  '>

      <div className='w-[100%] h-[10rem] mt-3 flex flex-col items-center gap-6 lg:mt-7
 md:flex-row md:flex-wrap md:justify-center md:content-start  md:h-[23rem] md:items-center
 lg:gap-[6rem] lg:h-[5rem] 
 lg:mb-[3rem] '>
        {contact.map((e) => {
          return <div key={e.id} className='flex flex-row gap-2 md:mt-4 lg:mt-0'>
            <div className='w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full bg-purple-200'>
              {e.icon}
            </div>

            <p className='text-[20px] font-semibold mt-1'>  {e.content} </p>

          </div>
        })}
      </div>
    </div>
    </Zoom>
  )
}

export default Contact
