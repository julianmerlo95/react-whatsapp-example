import React, { useContext, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../../context/Context';
import Svg from '../svg/Svg';
import './Img.sass';

const Img = (props) => {
  const context = useContext(Context);
  const { newRenderImage } = context;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="image">
        <h3>{newRenderImage.name}</h3>
        <img src={newRenderImage.img}></img>
        <div className="image__icon">
          <span onClick={() => props.history.push(`/chats/${newRenderImage.index}`)}>
            <Svg icon="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 
            0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" color="green" />
          </span>
          <span><Svg icon='M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 
            2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' color="green" /></span>
        </div>
      </div>
    </Suspense>
  )
}

export default withRouter(Img);