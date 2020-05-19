import React from 'react';
import { withRouter } from 'react-router-dom';
import './InfoUser.sass';
import arrayUser from '../../BDusers/index';
import Svg from '../UI/svg/Svg';

const InfoUser = (props) => {

  const { history, match } = props;

  let index = match.params.index;

  return (
    <div className="infouser">
      <span onClick={() => history.push(`/chats/${index}`)}
        className="infouser__icon--back">
        <Svg icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
      </span>
      <h3 className="infouser__name">{arrayUser[index].name}</h3>
      <img className="infouser__img" src={arrayUser[index].img}></img>
      <hr></hr>
      <ul className="infouser__list">
        <li>Mute notifications</li>
        <li>Custom notifications</li>
        <li>Media visibility</li>
        <li>Starred messages</li>
        <div>
          <h2 className="infouser__title">Encryption</h2>
          <h3 style={{ fontFamily: 'Lato, sans-serif' }}>Messages tot his chat and calls are secured with end-to-end encryption.
          Tap to verify
          </h3>
          <span></span>
        </div>
      </ul>
      <hr></hr>
      <div className="infouser__about">
        <h3>About and phone number</h3>
        <h2 className="infouser__title">Keep walking</h2>
        <h4>+534567854243</h4>
      </div>
      <hr></hr>
      <div className="infouser__block">
        <div className="infouser__block--block">
          <span><Svg color="red" icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" /></span>
          <h3>Block</h3>
        </div>
        <hr></hr>
        <div className="infouser__block--unlike">
          <span><Svg color="red" icon="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z" /></span>
          <h3>Report contact</h3>
        </div>
      </div>
    </div>
  )
}

export default withRouter(InfoUser);