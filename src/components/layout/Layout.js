import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Calls = React.lazy(() => import('../home/calls/Calls'));
const Camera = React.lazy(() => import('../home/camera/Camera'));
const Status = React.lazy(() => import('../home/status/Status'));
const Chats = React.lazy(() => import('../home/chats/Chats'));

function Layout() {
  return (
    <div className="layout">
      <Suspense fallback={<div>Cargando...</div>}>
        <BrowserRouter>
          <Switch>
            <Route extact path="/chats" component={Chats} />
            <Route extact path="/camera" component={Camera} />
            <Route extact path="/status" component={Status} />
            <Route extact path="/" component={Calls} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default Layout;
