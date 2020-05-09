import React from 'react';
import { withRouter } from 'react-router-dom'
import arrayUser from '../../../../BDusers/index';
import Svg from '../../../UI/Svg';
import './Chat.sass';

const Chat = (props) => {

  const { history, match } = props;

  let index = match.params.index;

  return (
    <div className="chat">
      <div className="chat_container_date">
        <h3
          onClick={() => history.goBack()}>
          <Svg icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </h3>
        <img className="chat_container_date__img" src={arrayUser[index].img}></img>
        <h3 className="chat_container_date__name">{arrayUser[index].name}</h3>
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