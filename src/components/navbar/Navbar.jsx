import React from 'react';
import './navbar.scss';
import {Icon} from '@iconify/react';


export const Navbar = () => {
    return (
      <header>
        <div className="navbar">
           <Icon className="navbar_icon" icon='logos:react'/>
           <h1 className="navbar_title">Clase2</h1>
           <Icon className="navbar_icon" icon='material-symbols:accessibility-new' color='#61dbfb' />

        </div>
      </header>
    )
}

