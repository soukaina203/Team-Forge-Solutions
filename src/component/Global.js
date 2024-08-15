import React from 'react'
import Team from './Team'
import TeamBuilding from './TeamBuilding'

function Global() {
  return (
    <div id='team' className='flex flex-col h-full  mb-[3rem] bg-gradient-to- lg:mt-[5rem]
 
    '>

      <Team />
      <TeamBuilding
      />
    </div>
  )
}

export default Global
