import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-ghost text-neutral-content">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-3xl">ASTRO</Link>
        </div>
        <div className="flex-none nav-links">
            <ul className="my-5 menu-horizontal px-1 space-x-3">
                <li><Link to='/'>HOME</Link></li>
                {/* <li><Link to='/'></Link></li>
                <li><Link to='/'></Link></li> */}
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/contact'>CONTACT US</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
