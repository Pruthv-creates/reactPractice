import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png" 

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul >
            <li className='nav-ul'>Home</li>
            <li className='nav-ul'>Program</li>
            <li className='nav-ul'>About Us</li>
            <li className='nav-ul'>Campus</li>
            <li className='nav-ul'>Testimonials</li>
            <li ><button className='nav-btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar