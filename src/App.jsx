import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Marquee from './components/reactbits/marquee'
import Aboutme from './components/aboutme'
import Contact from './components/contact'
import Certifications from './components/certifications'
import Footer from './components/footer'

function App() {

  return (
    <div className='grid grid-row-10'>
    <Hero />
     <Aboutme />
     <Marquee />
    <Projects />
    <Skills />
    <Certifications />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
