import React from 'react'
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">QuickScan</p>
        </Link>
        <Link to="/upload" className="primary-button w-fit">
           Upload your resume!
        </Link>
    </nav>
  )
}

export default Navbar