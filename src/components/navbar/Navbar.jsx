import React from 'react';
import orangeLogo from '../../Assets/orange.png';

import './navbar.scss';
// import {Icon} from '@iconify/react';


export const Navbar = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img
              src={orangeLogo}
              alt='Logo'
              
            />
          </a>
  
          <a
            role='button'
            className={'navbar-burger burger'}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Home
              </a>
              <a href='/' className='navbar-item'>
                Documentation
              </a>
            </div>
          </div>
        </div>
      </nav>

      
    )
}

