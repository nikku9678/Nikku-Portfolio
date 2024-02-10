import React from 'react'
import Home from '../../components/Home/Home'

import Homemenu from '../../components/Home/Homemenu'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Education from '../../components/Education/Education'
import Contact from '../../components/Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from '../../components/Skills/Skills'
function Homepage() {
  AOS.init({
    duration: 650,
    // once: true
  });
  return (
    <div className='homepage'>
      {/* <div data-aos="zoom-out-down">
      <Home/>
      </div>
      <div data-aos="zoom-out-down">
      <About/>
      </div>
      <div  data-aos="zoom-out-down">
      <Education/>
      </div>
      <div data-aos="zoom-out-down">
      <Projects/>
      </div>
      <div  data-aos="zoom-out-down">
      <Contact/>
      </div>
      <Footer/> */}
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage
