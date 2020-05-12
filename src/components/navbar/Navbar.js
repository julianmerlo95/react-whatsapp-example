import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { search, point, camera } from './data';
import { Context } from '../../context/Context';
import Svg from '../UI/svg/Svg';
import Input from '../UI/input/Input';
import Points from '../UI/points/Points';
import './Navbar.sass';

function Navbar() {

  const context = useContext(Context);
  const { showInput, changeMoodHandler, showPoints, changePointsHandler } = context;


  return (
    <div className="navbar">
      {showInput == false ? <div id="navbar" className="navbar__show">
        <div className="navbar__high">
          <h1 className="navbar__high__title">WhatsApp</h1>
          <ul className="navbar__high__list">
            <span onClick={changeMoodHandler}>
              <Svg icon={search} />
            </span>
            <span onClick={changePointsHandler}><Svg icon={point} /></span>
            {/* {showPoints == false ? "" : <Points />} */}
          </ul>
        </div>
        <div className="navbar__down">
          <h3 className="navbar__down__camera">
            <NavLink activeStyle={{ color: 'white' }} to="/camera"> <Svg icon={camera} /> </NavLink>
          </h3>
          <ul className="navbar__down__list">
            <li>
              <NavLink activeStyle={{ color: 'white' }} to="/"> Chats </NavLink>
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
