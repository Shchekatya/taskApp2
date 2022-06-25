import './Header.scss'
import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header>
            <div>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/'>Tasks</NavLink>
          </div>
        </header>
        <main>     
            <Outlet />     
        </main>
        <footer>
            
        </footer>
        </>
    );
};

export default Header;