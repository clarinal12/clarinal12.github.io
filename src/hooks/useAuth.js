import React, { createContext, useContext, useState, useEffect } from 'react';
import { node } from 'prop-types';
// import { useLazyQuery } from 'react-apollo';
// import { ME } from 'queries';

const authContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'));

  const [accountDetails, setAccountDetails] = useState({});
  // const [getMyDetails, { data }] = useLazyQuery(ME, {
  //   onCompleted: result => {
  //     setAccountDetails(result.me);
  //   },
  //   notifyOnNetworkStatusChange: true,
  // });

  useEffect(() => {
    if (token) {
      // getMyDetails();
    }
    // if (data && data.me) {
    //   setAccountDetails(data.me);
    // }
    return () => {
      setAccountDetails({});
    };
  }, [token]);

  const setAccessToken = item => {
    window.localStorage.setItem('token', item);
    setToken(item);
  };

  const signOut = () => {
    return new Promise(resolve => {
      setToken(null);
      setAccountDetails({});
      window.localStorage.clear();
      resolve(true);
    });
  };

  return {
    accessToken: token,
    setAccessToken,
    accountDetails,
    signOut,
  };
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

ProvideAuth.propTypes = {
  children: node,
};

ProvideAuth.defaultProps = {
  children: null,
};
