import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h1>
            Image Reinterpretation
        </h1>
        <div className='instructions'>Help</div>
        <div className='about'>About</div>
    </div>
  )
}

export default Navbar