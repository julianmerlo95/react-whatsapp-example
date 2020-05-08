import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar';
import arrayUser from '../../../BDusers/index';
import Statu from './statu/Statu';
import img from '../../../assets/status/julian.JPG'
import './Status.sass';

function Status() {

  const [renderComponent, setRenderComponent] = useState(true);
  const [statusImg, setStatusImg] = useState("");
  const [statusImgStatu, setStatusImgStatu] = useState("");
  const [statusName, setStatusName] = useState("");
  const [statusDate, setStatusDate] = useState("");

  const changeComponentHandler = (user) => {
    setStatusImg(user.img);
    setStatusImgStatu(user.imgStatu);
    setStatusName(user.name);
    setStatusDate(user.date);
    setRenderComponent(!renderComponent);
  }

  let switchComponent = null;

  if (renderComponent) {
    switchComponent = (
      <div>
        <Navbar />
        <div className="status__container__personal">
          <img className="status__container__personal__img" src={img}></img>
          <div className="status__container__personal__data">
            <h3>My status</h3>
            <h4>Tap to add  status update</h4>
          </div>
        </div>
        <h3 className="status__update__status">Recent update</h3>
        {arrayUser.map((user, index) => {
          return (
            <div key={index} className="status__container__user">
              <img className="status__container__user__img" src={user.imgStatu}></img>
              <div onClick={() => changeComponentHandler(user)} className="status__container__user__data">
                <h3>{user.name}</h3>
                <h4>{user.date}</h4>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    switchComponent = (
      <Statu
        img={statusImg}
        imgStatu={statusImgStatu}
        name={statusName}
        date={statusDate}
      />
    )
  }


  return (
    <div className="status">
      {switchComponent}
    </div>
  );
}

export default Status;
