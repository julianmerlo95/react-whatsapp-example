import React from 'react';
import Navbar from '../../navbar/Navbar';
import img from '../../../assets/camera/fondo.jpeg';
import './Camera.sass';

function Camera() {
  return (
    <div className="camera">
      <Navbar />
      <img className="camera__img" src={img}></img>
    </div>
  );
}

export default Camera;
