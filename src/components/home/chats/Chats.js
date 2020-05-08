import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import arrayUser from '../../../BDusers/index';
import Svg from '../UI/Svg';
import Chat from './chat/Chat';
import './Chats.sass';

function Chats() {

  const [renderComponent, setRenderComponent] = useState(true);
  const [contactImg, setContactImg] = useState("");
  const [contactName, setContactName] = useState("");

  //Para agrandar la imagen
  // const changeImgHandler = (index) => {
  // }

  const changeComponentHandler = (chat) => {
    setContactImg(chat.img)
    setContactName(chat.name)
    setRenderComponent(!renderComponent);
  }

  let switchComponent = null;

  if (renderComponent) {
    switchComponent = (
      <div>
        <Navbar />
        {arrayUser.map((user, index) => {
          return (
            <div className="chats_container" key={index}>
              <div className="chats_container_img">
                <img id="imagen" src={user.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(user)} className="chats_container__message">
                <div className="chats_container__message__nameAndDate">
                  <h3>
                    {user.name}
                  </h3>
                  <h3 style={{ color: 'gray', fontSize: '14px' }}
                    className={`chats_container__message__nameAndDate__sound${user.valueIcon ? "__true" : ""}`}>
                    {user.date}
                  </h3>
                </div>
                <div className="chats_container__message__iconAndMessage">
                  <h3 style={{ color: 'gray', fontSize: '16px' }} >
                    {user.message}
                  </h3>
                  <Svg classIcon={`chats_container__message__iconAndMessage__icon${user.valueIcon ? "__true" : ""}`}
                    icon={user.icon} color="gray" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    switchComponent = (
      <div>
        <Chat
          img={contactImg}
          name={contactName}
        />
      </div>
    )
  }

  return (
    <div className="chats">
      {switchComponent}
    </div >
  );
}

export default Chats;
