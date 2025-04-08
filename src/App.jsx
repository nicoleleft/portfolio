import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {


  return (
    <div className="background-image">
      <Header/>
      <div id='about'>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
