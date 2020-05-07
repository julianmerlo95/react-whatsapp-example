import React from 'react';
import './Chats.sass';
import arrayMessage from './data';

function Chats() {
  return (
    <div className="chats">
      {arrayMessage.map((chat, index) => {
        return (
          <div className="chats_container" key={index}>
            <div className="chats_container_img">
              <img src={chat.img}></img>
            </div>
            <div className="chats_container__message">
              <div className="chats_container__message__nameAndDate">
                <h3>{chat.name}</h3>
                <h3 style={{ color: 'gray', fontSize: '14px' }}>{chat.date}</h3>
              </div>
              <div className="chats_container__message__iconAndMessage">
                <h3 style={{ color: 'gray', fontSize: '16px' }} >{chat.message}</h3>
                <h3>sd</h3>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  );
}

export default Chats;
