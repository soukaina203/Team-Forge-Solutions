import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const contact=[
    {content:"0537485965",icon:<FaPhone className='text-[23px] '/>},
    {content:"info@teamforgesolutions.com",icon:<MdOutlineMail className='text-[28px]'/>},
    {content:"Rabat Agdal",icon:<FaMapMarkerAlt className='text-[25px]'/>},
  ]
  return (
    <div id='contact' className='w-[100%] h-[7rem] flex items-center bg-indigo-300'>
      <div className='flex justify-between w-[67%] ml-auto mr-auto  '>
        {contact.map((e)=>{
          return <div className='flex flex-row gap-2'>
            <div className='w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500'>
           {e.icon}
            </div>

            <p className='text-[20px] font-semibold mt-1'>  {e.content} </p>

             </div>
        })}
      </div>
    </div>
  )
}

export default Contact
