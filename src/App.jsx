import React from 'react'
import Header from './header.jsx'
import Hero from './hero.jsx'
import Dp from './assets/hero-dp.jpg'
import About from './about.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <>
      <Header />
      <Hero img={Dp} name='tahsin zidane' />
      <About img={Dp} name='tahsin zidane' />
      <Project/>
      <Contact number='012 345 6789' email='fornet.tahsin@gmail.com'/>
      <Footer name='tahsin zidane'/>
    </>
  )
}

export default App