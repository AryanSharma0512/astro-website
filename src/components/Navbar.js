import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logos/logo_white.png';

const Navbar = () => {

  const location = useLocation();

  return (
    <div className="navbar bg-ghost text-neutral-content nav">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-8xl -mt-44">
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <div className="flex-none nav-links">
        <ul className="my-5 menu-horizontal px-1 space-x-3">
          <li className={location.pathname === '/' ? 'active' : ''}><Link to='/'>HOME</Link></li>
          <li className={location.pathname === '/patch' ? 'active' : ''}><Link to='/'>PATCH 2</Link></li>
          <li className={location.pathname === '/affiliations' ? 'active' : ''}><Link to='/affiliations'>OUR AFFILIATIONS</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to='/about'>ABOUT</Link></li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to='/contact'>CONTACT US</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
