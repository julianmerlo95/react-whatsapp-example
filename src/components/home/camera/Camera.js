import React from 'react';
import img from '../../../assets/camera/fondo.jpeg';
import Navbar from '../../navbar/Navbar';
import Image from 'react-image';
import './Camera.sass';

function Camera() {
  return (
    <div className="camera">
      <Navbar />
      <Image
        className="camera__img"
        src={img}
        loader={<div className="loading__container"><div className="loading__camera"></div></div>}
        unloader={<div><div className="loading__camera"></div></div>}
      />
    </div>
  );
}

export default Camera;
