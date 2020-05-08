import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import arrayUsers from '../../../BDusers/index';
import Svg from '../UI/Svg';
import Call from './call/Call';
import './Calls.sass';

function Calls() {

  const [renderComponent, setRenderComponent] = useState(true);
  const [contactCallImg, setContactCallImg] = useState("");
  const [contactCallName, setContactCallName] = useState("");
  const [contactCallPhone, setContactCallPhone] = useState("");

  const changeComponentHandler = (user) => {
    setContactCallImg(user.img)
    setContactCallName(user.name)
    setContactCallPhone(user.iconCall)
    setRenderComponent(!renderComponent);
  }

  let switchComponent = null;

  if (renderComponent) {
    switchComponent = (
      <div>
        <Navbar />
        {arrayUsers.map((user, index) => {
          return (
            <div key={index} className="calls__container__user">
              <div className="calls__img">
                <img className="calls__img__user" src={user.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(user)} className="calls__date">
                <h3>{user.name}</h3>
                <div style={{ display: 'flex' }}>
                  <Svg icon={user.iconCall} color="black" width="18" />
                  <h4>{user.date}</h4>
                </div>
              </div>
              <div className="calls__icon">
                <Svg icon={user.iconCalls} color="black" width="25" />
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    switchComponent = (
      <div>
        <Call
          img={contactCallImg}
          name={contactCallName}
          iconPhone={contactCallPhone}
        />
      </div>
    )
  }

  return (
    <div className="calls">
      {switchComponent}
    </div >
  );
}

export default Calls;
