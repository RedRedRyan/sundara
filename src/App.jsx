import React from 'react'
import Navbar from './components/NavBar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Tech from "./components/Tech.jsx";
import About from "./components/About.jsx";
import Solar from "./components/Solar.jsx";
import Stats from "./components/Stats.jsx";


const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Tech/>
        <Solar/>
        <About/>
        <Contact/>
    </main>
  )
}

export default App