import React from 'react';
import { withRouter } from 'react-router-dom';
import Svg from '../../../UI/svg/Svg';
import arrayUser from '../../../../BDusers/index';
import './Call.sass';

const Call = (props) => {

  const { history, match } = props;

  let index = match.params.index;

  return (
    <div className="call">
      <div className="call__navbar">
        <div className="call__navbar__info">
          <span onClick={() => history.push('/calls')}>
            <Svg icon="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
          </span>
          <h3>Call info</h3>
        </div>
        <div className="call__navbar__contact">
          <span onClick={() => history.push(`/chats/${index}`)}>
            <Svg icon="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 
          0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />
          </span>
          <Svg icon="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 
          2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" />
        </div>
      </div>
      <div className="call__date">
        <img src={arrayUser[index].img}></img>
        <div className="call__date__user">
          <h3>{arrayUser[index].name}</h3>
          <h4>{arrayUser[index].name}</h4>
        </div>
        <div>
          <Svg icon={arrayUser[index].iconPhone} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Call);

