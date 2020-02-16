import React from 'react';
import { Redirect } from 'react-router-dom';

export default ComposedComponent => {
  const Authenticate = props => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return <Redirect to="/login" />;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ComposedComponent {...props} />;
  };
  return Authenticate;
};
