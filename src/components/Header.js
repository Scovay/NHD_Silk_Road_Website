import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/background">Background</NavLink></li>
      <li><NavLink to="/buildUp">Build Up</NavLink></li>
      <li><NavLink to="/mainEvent">Main Event</NavLink></li>
    </ul>    
  </header>
);

export default Header;