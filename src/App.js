import React from 'react';
import { shape, bool } from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import requireAuth from './utils/requireAuth';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = props => {
  const { client, loading } = props;
  return (
    <Router>
      <>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={requireAuth(Main)} />
        </Switch>
      </>
    </Router>
  );
};

App.propTypes = {
  client: shape({}),
  loading: bool,
};

App.defaultProps = {
  client: {},
  loading: false,
};

export default App;
