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
function Homepage() {
  AOS.init({
    duration: 650,
    // once: true
  });
  return (
    <div className='homepage'>
      <div data-aos="zoom-out-down">
      <Home/>
      </div>
      <div data-aos="fade-left">
      <About/>
      </div>
      <div data-aos="fade-right">
      <Education/>
      </div>
      <div data-aos="fade-left">
      <Projects/>
      </div>
      <div data-aos="fade-left">
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage
