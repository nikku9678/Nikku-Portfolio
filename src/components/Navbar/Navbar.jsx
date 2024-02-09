import { useState } from "react"
import "./Navbar.css"
// import {Link}  from 'react-router-dom'
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <div className="nav-left">
      <a href="/" className="brand-name">
        Nikku
      </a>
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
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li >
            <a href="/education">Education</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/acheivements">Acheivements</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}