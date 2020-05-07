import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Calls from '../home/calls/Calls';
import Camera from '../home/camera/Camera';
import Chats from '../home/chats/Chats';
import Status from '../home/status/Status';

function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route extact path="/camera" component={Camera} />
          <Route extact path="/chats" component={Chats} />
          <Route extact path="/status" component={Status} />
          <Route extact path="/calls" component={Calls} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
