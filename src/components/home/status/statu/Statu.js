import React from 'react';
import { withRouter } from 'react-router-dom';
import arrayUser from '../../../../BDusers/index';
import Svg from '../../../UI/svg/Svg';
import './Statu.sass';

const Statu = (props) => {

  const { history, match } = props;

  let index = match.params.index;

  return (
    <div className="statu">
      <div className="statu__container__date">
        <div className="statu__container__date__img">
          <span onClick={() => history.push('/status')}>
            <Svg
              icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
          </span>
          <img className="statu__container__date__img__user" src={arrayUser[index].img}></img>
        </div>
        <div className="statu__container__date__text">
          <h3>{arrayUser[index].name}</h3>
          <h4>{arrayUser[index].date}</h4>
        </div>
        <div className="statu__container__date__icon">
          <Svg icon="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 
              2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2
              -2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </div>
      </div>
      <img className="statu__img" src={arrayUser[index].imgStatu}></img>
    </div >
  )
}

export default withRouter(Statu);