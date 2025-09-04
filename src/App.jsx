import React from 'react'
import Navbar from './components/NavBar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Tech from "./components/Tech.jsx";
import './App.css'
import About from "./components/About.jsx";


const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Tech/>
        <About/>
        <Contact/>
    </main>
  )
}

export default App