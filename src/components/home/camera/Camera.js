import React from 'react';
import Navbar from '../../navbar/Navbar';
import Image from 'react-image';
import img from '../../../assets/camera/fondo.jpeg';
import './Camera.sass';

function Camera() {
  return (
    <div className="camera">
      <Navbar />
      <Image
        className="camera__img"
        src={img}
        loader={<div className="loading__camera"><h2>Loading...</h2></div>}
        unloader={<div className="loading__camera"><h2>Loading...</h2></div>}
      />
    </div>
  );
}

export default Camera;
