import React from 'react';
import { isAuthenticated } from '../helpers/session';
import withRouter from './withRouter';
import Login from '../pages/Login';

const RequireAuth = ({ props, children }) => {
  return !isAuthenticated() ? (
    <Login />
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default withRouter(RequireAuth);
