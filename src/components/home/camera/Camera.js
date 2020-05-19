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
        loader={<img className="camera__img"
          src={img} />}
        unloader={<img className="camera__img"
          src={img} />}
      />
    </div>
  );
}

export default Camera;
