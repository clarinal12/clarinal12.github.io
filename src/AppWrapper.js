import React, { useEffect, useState } from 'react';

import getApolloClient from './apolloClient';
import AppComponent from './App';

export default function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApolloClient().then(newClient => {
      setClient(newClient);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return <AppComponent client={client} loading={loading} />;
}
