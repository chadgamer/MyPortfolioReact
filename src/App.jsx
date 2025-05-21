import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Marquee from './components/reactbits/marquee'
import Aboutme from './components/aboutme'

function App() {

  return (
    <div className='grid grid-row-5'>
    <Hero />
     <Aboutme />
     <Marquee />
    <Projects />
    <Skills />
    </div>
  )
}

export default App
