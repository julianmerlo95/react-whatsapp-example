import React from 'react';
import { withRouter } from 'react-router-dom'
import arrayMessage from '../data';
import './Chat.sass';

const Chat = (props) => {
  const { img, name, history } = props;

  return (
    <div className="chat">
      <div className="chat_container_date">
        <h3
          onClick={() => history.goBack()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
          </svg>
        </h3>
        <img className="chat_container_date__img" src={img}></img>
        <h3 className="chat_container_date__name">{name}</h3>
      </div>
      {arrayMessage.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="chat__messageOne">{item.messageOne}</h3>
            <div className="chat__container__messageTwo">
              <h3 className="chat__container__messageTwo_message">{item.messageTwo}</h3>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default withRouter(Chat);