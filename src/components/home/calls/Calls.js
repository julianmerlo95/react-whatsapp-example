import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Image from 'react-image';
import store from '../../../redux/index';
import Navbar from '../../navbar/Navbar';
import arrayUsers from '../../../BDusers/index';
import Column from '../../UI/column/Column';
import Svg from '../../UI/svg/Svg';
import Img from '../../UI/img/Img';
import './Calls.sass';

function Calls(props) {

  const [showImage, setShowImage] = useState(false);

  const changeImageHandler = (index, img, name) => {
    setShowImage(!showImage);
    store.dispatch({
      type: 'SHOW_IMAGE',
      image: {
        index,
        img,
        name
      }
    })
  }

  const changeComponentHandler = (index) => {
    props.history.push(`/calls/${index}`)
  }

  return (
    <div className="calls">
      <Navbar />
      {showImage === true ? <Img /> : ""}
      {arrayUsers.map((user, index) => {
        return (
          <div key={index} className="calls__container__user">
            <div className="calls__img">
              <Image
                onClick={() => changeImageHandler(index, user.img, user.name)}
                className="calls__img__user"
                src={user.img}
                loader={<div className="loading__img"><h4>Loading...</h4></div>}
                unloader={<div className="loading__img"><h4>Loading...</h4></div>}
              />
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
