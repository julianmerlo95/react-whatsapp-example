import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import arrayUsers from '../../../BDusers/index';
import Column from '../../UI/Column';
import Svg from '../../UI/Svg';
import './Calls.sass';

function Calls(props) {

  const changeComponentHandler = (index) => {
    props.history.push(`/calls/${index}`)
  }

  return (
    <div className="calls">
      <Navbar />
      {arrayUsers.map((user, index) => {
        return (
          <div key={index} className="calls__container__user">
            <div className="calls__img">
              <img className="calls__img__user" src={user.img}></img>
            </div>
            <div onClick={() => changeComponentHandler(index)} className="calls__date">
              <h3>{user.name}</h3>
              <div style={{ display: 'flex' }}>
                <Svg icon={user.iconCall} color="black" width="18" />
                <h4>{user.date}</h4>
              </div>
            </div>
            <div className="calls__icon">
              <Svg icon={user.iconCalls} color="black" width="25" />
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
