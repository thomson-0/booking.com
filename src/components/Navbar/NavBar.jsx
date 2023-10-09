import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <Link to="/" className='logo'>Booking.com</Link>
            <div className="navitem">
                <button className='Navbtn'>
                      Register
                </button>
                <button className='Navbtn'>
                      Login
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default NavBar