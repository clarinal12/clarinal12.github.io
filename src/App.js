import React from 'react';

// libraries
import { shape, bool } from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

// / Hooks
import { ProvideAuth, useAuth } from 'hooks/useAuth';

// styles
import 'onsenui/css/onsenui.css';
import 'App.scss';

// utils
// import requireAuth from './utils/requireAuth';

// components
import Navigation from './pages/Navigation';
import Authentication from './pages/Authentication';

// const ProtectedPage = ({ component, ...rest }) => {
//   const { accessToken } = useAuth();
//   const page = accessToken ? Main : Authentication;
//   return React.createElement(page, props: { ...rest }));
// };

const App = props => {
  const { client, loading } = props;

  if (loading) return <h3>Loading...</h3>;

  return (
    <ApolloHooksProvider client={client}>
      <ApolloProvider client={client}>
        <ProvideAuth>
          <Navigation />
        </ProvideAuth>
      </ApolloProvider>
    </ApolloHooksProvider>
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
