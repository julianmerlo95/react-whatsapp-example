import React from 'react';
import { withRouter } from 'react-router-dom'
import arrayUser from '../../../../BDusers/index';
import Svg from '../../../UI/svg/Svg';
import './Chat.sass';

const Chat = (props) => {

  const { history, match } = props;

  let index = match.params.index;

  return (
    <div className="chat">
      <div className="chat_container_date">
        <h3
          onClick={() => history.push('/')}>
          <Svg icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </h3>
        <img className="chat_container_date__img" src={arrayUser[index].img}></img>
        <h3 className="chat_container_date__name">{arrayUser[index].name}</h3>
      </div>
      <div className="chat__container__message">
        <input placeholder="Type a message"></input>
        <span>
          <Svg icon="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 
        9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 
        1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 
        6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
            width={'25'} height={'35'}
          />
        </span>
      </div>
      {arrayUser[index].messageChat.map((user, index) => {
        return (
          <div key={index}>
            <h3 className="chat__messageOne">{user.messageOne}</h3>
            <div className="chat__container__messageTwo">
              <h3 className="chat__container__messageTwo_message">{user.messageTwo}</h3>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default withRouter(Chat);