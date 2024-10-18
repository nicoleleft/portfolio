import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {


  return (
    <>
      <Header/>
      <div id='about'>
        <About/>
      </div>
    </>
  )
}

export default App
