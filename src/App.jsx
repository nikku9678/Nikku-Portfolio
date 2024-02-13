import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import  Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  )
}

export default App
