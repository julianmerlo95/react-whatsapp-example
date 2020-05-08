import React from 'react';
import { NavLink } from 'react-router-dom';
import { search, point, camera } from './data';
import Svg from '../home/UI/Svg';
import './Navbar.sass';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__high">
        <h1 className="navbar__high__title">WhatsApp</h1>
        <ul className="navbar__high__list">
          <Svg icon={search} />
          <Svg icon={point} />
        </ul>
      </div>
      <div className="navbar__down">
        <h3 className="navbar__down__camera">
          <NavLink activeStyle={{ color: 'white' }} to="/camera">
            <Svg icon={camera} />
          </NavLink>
        </h3>
        <ul className="navbar__down__list">
          <li><NavLink activeStyle={{ color: 'white' }}
            to="/chats">Chats</NavLink></li>
          <li><NavLink activeStyle={{ color: 'white' }}
            to="/status">Status</NavLink></li>
          <li><NavLink activeStyle={{ color: 'white' }}
            to="/calls">Calls</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
