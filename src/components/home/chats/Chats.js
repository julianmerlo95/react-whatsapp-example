import React, { useState, Suspense } from 'react';
import { withRouter, history } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Loading from '../../loading/Loading';
import arrayUser from '../../../BDusers/index';
import Column from '../../UI/column/Column';
import Svg from '../../UI/svg/Svg';
import './Chats.sass';

function Chats(props) {

  const [showImage, setShowImage] = useState(false)

  const changeImgHandler = (index) => {
    const image = document.getElementById(index);
    const showName = document.getElementById(`name_${index}`);
    const showDiv = document.getElementById(`div_${index}`);
    setShowImage(!showImage);

    if (showImage) {
      showDiv.classList = "showDiv";
      showName.classList = "showName";
      image.className = 'showImage';
    } else {
      showDiv.className = 'hide__chats_container_img';
    }
  }

  const changeComponentHandler = (index) => {
    props.history.push(`/chats/${index}`);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        {arrayUser.map((user, index) => {
          return (
            <div className="chats_container" key={index}>
              <div className="chats_container_img">
                <img onClick={() => changeImgHandler(index)}
                  src={user.img}></img>
              </div>
              <div id={`div_${index}`} className="hide__chats_container_img">
                <h5 id={`name_${index}`} className="hideImage"> {user.name}</h5>
                <div className="showDiv__text">
                  <span onClick={() => props.history.push(`/chats/${index}`)}>
                    <Svg icon="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 
                     0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" color="green" />
                  </span>
                  <span><Svg icon='M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 
                  2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' color="green" /></span>
                </div>
                <img id={index} className="hideImage" src={user.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(index)}
                className="chats_container__message">
                <div className="chats_container__message__nameAndDate">
                  <h3>
                    {user.name}
                  </h3>
                  <h4 style={{ color: 'gray', fontSize: '14px' }}
                    className={`chats_container__message__nameAndDate__sound`}>
                    {user.date}
                  </h4>
                </div>
                <div className="chats_container__message__iconAndMessage">
                  <h3 style={{ color: 'gray', fontSize: '16px' }} >
                    {user.message}
                  </h3>
                  <span>
                    <Svg classIcon={`chats_container__message__iconAndMessage__icon`}
                      icon={user.iconChats} color="gray" />
                  </span>
                </div>
              </div>
              <Column background={user.colorBackground}
                name={user.name} />
            </div>
          )
        })}
      </Suspense>
    </>
  );
}

export default withRouter(Chats);
