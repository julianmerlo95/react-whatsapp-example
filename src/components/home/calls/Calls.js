import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../../context/Context';
import Navbar from '../../navbar/Navbar';
import arrayUsers from '../../../BDusers/index';
import Column from '../../UI/column/Column';
import Svg from '../../UI/svg/Svg';
import Img from '../../UI/img/Img';
import './Calls.sass';

function Calls(props) {

  const context = useContext(Context);
  const { showimage, changeImageHandler } = context;

  const changeComponentHandler = (index) => {
    props.history.push(`/calls/${index}`)
  }

  return (
    <div className="calls">
      <Navbar />
      {showimage === true ? <Img /> : ""}
      {arrayUsers.map((user, index) => {
        return (
          <div key={index} className="calls__container__user">
            <div className="calls__img">
              <img onClick={() => changeImageHandler(index, user.img, user.name)}
                className="calls__img__user" src={user.img}></img>
            </div>
            <div onClick={() => changeComponentHandler(index)}
              className="calls__date">
              <h3>{user.name}</h3>
              <div style={{ display: 'flex' }}>
                <span onClick={() => props.history.push(`/phone/${index}`)}>
                  <Svg icon={user.iconCall} color="green" width="12" />
                </span>
                <h4>{user.date}</h4>
              </div>
            </div>
            <div className="calls__icon">
              <span onClick={() => props.history.push(`/phone/${index}`)}>
                <Svg icon={user.iconCalls} color="green" width="25" />
              </span>
            </div>
            <Column
              background={user.colorBackground}
              name={user.name} />
          </div>
        )
      })}
    </div >
  );
}

export default withRouter(Calls);
