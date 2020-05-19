import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

const PathDefault = () => {
  return (
    <>
      {<Redirect to="/chats" />}
    </>
  )
}

export default withRouter(PathDefault);