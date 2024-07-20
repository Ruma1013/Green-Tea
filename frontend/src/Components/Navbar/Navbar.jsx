import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <h1>GREEN TEA</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <ScrollLink 
            to='hero' 
            smooth={true} 
            duration={500}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to='aboutus' 
            smooth={true} 
            duration={500}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to='products' 
            smooth={true} 
            duration={500}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Product
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to='contact' 
            smooth={true} 
            duration={500}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div className="nav-store">
        <button className="store-button">STORE</button>
      </div>
    </div>
  );
}

export default Navbar;
