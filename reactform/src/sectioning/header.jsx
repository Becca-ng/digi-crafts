import { useState } from "react";
import { NavLink } from 'react-router-dom';
import '../App.css';


const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <NavLink to='/add' className='button'> Add Contact </NavLink>
          </li>
          <li>
            <NavLink to='/list' className='button'> Show List </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;