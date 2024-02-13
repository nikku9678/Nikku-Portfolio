import { useState } from "react"
import "./Navbar.css"
import {Link}  from 'react-router-dom'
import Logo from '../../assets/logo.png';
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleShowOff = ()=>{

    setIsNavExpanded(prev => !prev);
  }
  return (
    <nav className="navigation">
      <div className="nav-left">
      <Link to="/" className="brand-name">
        Nikku
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}N
      </button>
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul  onClick={handleShowOff} >
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li >
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li>
            <Link to="/acheivements">Acheivements</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}