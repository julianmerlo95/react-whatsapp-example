import React, { useState, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Loading from '../../loading/Loading';
import arrayUser from '../../../BDusers/index';
import Column from '../../UI/Column';
import Svg from '../../UI/Svg';
import './Chats.sass';

function Chats(props) {

  //Para agrandar la imagen
  // const changeImgHandler = (index) => {
  // }

  const changeComponentHandler = (index) => {
    props.history.push(`./chats/${index}`);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        {arrayUser.map((user, index) => {
          return (
            <div className="chats_container" key={index}>
              <div className="chats_container_img">
                <img id="imagen" src={user.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(index)}
                className="chats_container__message">
                <div className="chats_container__message__nameAndDate">
                  <h3>
                    {user.name}
                  </h3>
                  <h4 style={{ color: 'gray', fontSize: '14px' }}
                    className={`chats_container__message__nameAndDate__sound`}>
                    {user.date}
                  </h4>
                </div>
                <div className="chats_container__message__iconAndMessage">
                  <h3 style={{ color: 'gray', fontSize: '16px' }} >
                    {user.message}
                  </h3>
                  <span>
                    <Svg classIcon={`chats_container__message__iconAndMessage__icon`}
                      icon={user.iconChats} color="gray" />
                  </span>
                </div>
              </div>
              <Column background={user.colorBackground}
                name={user.name} />
            </div>
          )
        })}
      </Suspense>
    </>
  );
}

export default withRouter(Chats);
