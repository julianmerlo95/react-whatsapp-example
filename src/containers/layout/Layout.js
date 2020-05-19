import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PathDefault from './PathDefault';
import Loading from '../../components/loading/Loading';
import Camera from '../../components/home/camera/Camera';
import Chats from '../../components/home/chats/Chats';
import Status from '../../components/home/status/Status';
import Calls from '../../components/home/calls/Calls';

const Chat = React.lazy(() => import('../../components/home/chats/chat/Chat'));
const Statu = React.lazy(() => import('../../components/home/status/statu/Statu'));
const Call = React.lazy(() => import('../../components/home/calls/call/Call'));
const Phone = React.lazy(() => import('../../components/home/calls/phone/Phone'));
const InfoUser = React.lazy(() => import('../../components/infoUser/InfoUser'));

function Layout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PathDefault} />
            <Route exact path="/chats" component={Chats} />
            <Route path="/chats/:index" component={Chat} />
            <Route path="/user/:index" component={InfoUser} />
            <Route exact path="/camera" component={Camera} />
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
