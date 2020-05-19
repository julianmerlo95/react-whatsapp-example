import React from 'react';
import logo from '../../assets/loading/logoLoading.png'
import './Loading.sass';

const Loading = () => {
  return (
    <div className="loading__app">
      <div className="loading__app__text">
        <img src={logo}></img>
        <h2>From <span>Facebook</span></h2>
      </div>
    </div>
  )
}

export default Loading;