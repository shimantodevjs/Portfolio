import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
