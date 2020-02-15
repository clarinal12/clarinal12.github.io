import React from "react";
import { ApolloProvider } from "react-apollo";

export default function App({ client, loading }) {
  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <ApolloProvider client={client}>
      <h1>HELLO</h1>
    </ApolloProvider>
  );
}
