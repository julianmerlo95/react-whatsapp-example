import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from '../loading/Loading';
import Camera from '../home/camera/Camera';
import Chats from '../home/chats/Chats';
import Status from '../home/status/Status';
import Calls from '../home/calls/Calls';

const Chat = React.lazy(() => import('../home/chats/chat/Chat'));
const Statu = React.lazy(() => import('../home/status/statu/Statu'));
const Call = React.lazy(() => import('../home/calls/call/Call'));
const Phone = React.lazy(() => import('../home/calls/phone/Phone'));
const InfoUser = React.lazy(() => import('../infoUser/InfoUser'));

function Layout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Chats} />
            <Route path="/chats/:index" component={Chat} />
            <Route path="/user/:index" component={InfoUser} />
            <Route path="/camera" component={Camera} />
            <Route exact path="/status" component={Status} />
            <Route path="/status/:index" component={Statu} />
            <Route exact path="/calls" component={Calls} />
            <Route path="/calls/:index" component={Call} />
            <Route path="/phone/:index" component={Phone} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default Layout;
