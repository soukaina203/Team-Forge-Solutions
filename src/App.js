import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Mission from './component/Mission'
import About from './component/About'
import Services from './component/Services'
import WhyUs from './component/WhyUs'
import Contact from './component/Contact'


function App() {
  return (
    <div className='flex flex-col gap-5 md:gap-0'>
  <h1 className='underline'>  </h1>
    <Header/>
    <Home/>
    <About/>
    <Mission/>
    <Services/>
    <WhyUs/>
    <Contact/>

    </div>
  )
}

export default App
