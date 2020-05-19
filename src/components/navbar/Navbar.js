import React, { useState } from 'react';
import { search, point, camera } from './data';
import { NavLink } from 'react-router-dom';
import Input from '../UI/input/Input';
import Svg from '../UI/svg/Svg';
import './Navbar.sass';

function Navbar() {

  const [showInput, setShowInput] = useState(false);

  const changeMoodHandler = () => {
    setShowInput(!showInput)
  }

  return (
    <div className="navbar">
      <div className="navbar__high">
        <h1 className="navbar__high__title">WhatsApp</h1>
        <ul className="navbar__high__list">
          <span onClick={changeMoodHandler}>
            <Svg icon={search} />
          </span>
          <span ><Svg icon={point} /></span>
        </ul>
      </div>
      {showInput == false ? <div id="navbar" className="navbar__show">
        <div className="navbar__down">
          <h3 className="navbar__down__camera">
            <NavLink activeStyle={{ color: 'white' }} to="/camera"> <Svg icon={camera} /> </NavLink>
          </h3>
          <ul className="navbar__down__list">
            <li>
              <NavLink activeStyle={{ color: 'white' }} to="/chats"> Chats </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'white' }} to="/status"> Status </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'white' }} to="/calls"> Calls </NavLink>
            </li>
          </ul>
        </div>
      </div>
        : <Input />}
    </div>
  );
}

export default Navbar;