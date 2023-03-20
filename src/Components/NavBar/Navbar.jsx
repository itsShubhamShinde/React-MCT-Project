import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavbarOuterDiv'>
        <div>
        <ul>
            <Link to='/Home'>
            <li>Home</li>
            </Link>
            <Link to='/Products'>
            <li>Products</li>
            </Link>
            <Link to='/Users'>
            <li>Users</li>
            </Link>
            <Link to='/Contact'>
            <li>Contact</li>
            </Link>
            <Link to='/'>
            <li>LogOut</li>
            </Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar