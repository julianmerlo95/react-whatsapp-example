import React from 'react';
import { withRouter } from 'react-router-dom';
import './Statu.sass';

const Statu = (props) => {

  const { img, imgStatu, name, date, history } = props;

  return (
    <div className="status">
      <div className="status__container__date">
        <div className="status__container__date__img">
          <svg onClick={() => history.goBack()}
            xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path stroke="white" stroke-width="1.8"
              d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
          </svg>
          <img className="status__container__date__img__user" src={img}></img>
        </div>
        <div className="status__container__date__text">
          <h3>{name}</h3>
          <h4>{date}</h4>
        </div>
        <div className="status__container__date__icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
            <path d="M0 0h24v24H0V0z" fill="none" /><path stroke="white" stroke-width="1.8"
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 
              2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2
              -2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>
      <img className="status__img" src={imgStatu}></img>
    </div>
  )
}

export default withRouter(Statu);