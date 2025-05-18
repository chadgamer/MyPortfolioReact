import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {

  return (
    <div className='grid grid-row-5'>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    </div>
  )
}

export default App
