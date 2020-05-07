import React from 'react';
import { NavLink } from 'react-router-dom';
import { search, point, camera } from './data';
import './Navbar.sass';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__high">
        <h1 className="navbar__high__title">WhatsApp</h1>
        <ul className="navbar__high__list">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d={search} /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d={point} /></svg>
        </ul>
      </div>
      <div className="navbar__down">
        <h3 className="navbar__down__camera"><NavLink activeStyle={{ borderBottom: '5px solid white' }}
          to="/camera"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d={camera} /></svg></NavLink></h3>
        <ul className="navbar__down__list">
          <li><NavLink activeStyle={{ borderBottom: '5px solid white' }} to="/chats">Chats</NavLink></li>
          <li><NavLink activeStyle={{ borderBottom: '5px solid white' }} to="/status">Status</NavLink></li>
          <li><NavLink activeStyle={{ borderBottom: '5px solid white' }} to="/calls">Calls</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
