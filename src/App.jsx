import React from 'react'
import { AboutMe, Contact, Footer, Home, Navbar, Projects, Skills } from './components'
import MobileNav from './components/navbar/MobileNav'

function App() {
  return (
    <>
      <div className='w-screen'>
        <Navbar />
        <Home />
        <MobileNav />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
