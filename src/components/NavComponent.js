import React from 'react';
import logo from '../assets/oca_logo.svg';
import '../App.css';
const NavSection = () => {
    return(
        <header className='logo'>
          <img src={logo} alt='OCA logo'/>
        </header>
    )
};

export default NavSection;