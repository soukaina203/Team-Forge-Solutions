import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Mission from './component/Mission'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Global from './component/Global'

function App() {
  return (
    <div className='flex flex-col gap-5 md:gap-0 '>
      <Header />
      <Home />
      <About />
      <Mission />
      <Global /> {/* Contains two nested component */}
      <Services />
      <Contact />

    </div>
  )
}

export default App
