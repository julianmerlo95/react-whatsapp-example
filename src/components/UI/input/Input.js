import React, { useContext } from 'react';
import Svg from '../svg/Svg';
import { Context } from '../../../context/Context';
import './Input.sass'

const Input = () => {

  let context = useContext(Context);
  const { showInput, changeMoodHandler } = context;

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <span onClick={changeMoodHandler} className="navbar__icon">
          <Svg icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </span>
        <input className="navbar__input" placeholder="Search..."></input>
      </div>
    </div>
  )
}

export default Input;