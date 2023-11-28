import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Mission from './component/Mission'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import WhyUs from './component/WhyUs'
import Team from './component/Team'
import TeamBuilding from './component/TeamBuilding'
import Global from './component/Global'


function App() {
  return (
    <div className='flex flex-col gap-5 md:gap-0 '>
    <Header/>
    <Home/>
    <About/>

{/* <WhyUs/> */}
    <Mission/>
  <Global/>

    <Services/>
    <Contact/>

    </div>
  )
}

export default App
