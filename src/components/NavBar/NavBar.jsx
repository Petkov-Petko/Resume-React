import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#contacts">Contact</a></li>
    </ul>
  </div>
  )
}

export default NavBar