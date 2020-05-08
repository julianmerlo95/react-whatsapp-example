import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import arrayMessage from './data';
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
        {arrayMessage.map((chat, index) => {
          return (
            <div className="chats_container" key={index}>
              <div className="chats_container_img">
                <img id="imagen" src={chat.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(chat)} className="chats_container__message">
                <div className="chats_container__message__nameAndDate">
                  <h3>
                    {chat.name}
                  </h3>
                  <h3 style={{ color: 'gray', fontSize: '14px' }}
                    className={`chats_container__message__nameAndDate__sound${chat.valueIcon ? "__true" : ""}`}>
                    {chat.date}
                  </h3>
                </div>
                <div className="chats_container__message__iconAndMessage">
                  <h3 style={{ color: 'gray', fontSize: '16px' }} >
                    {chat.message}
                  </h3>
                  <svg className={`chats_container__message__iconAndMessage__icon${chat.valueIcon ? "__true" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d={chat.icon} />
                  </svg>
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
