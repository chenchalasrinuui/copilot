import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ExampleComponent from './components/ExampleComponent';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GraphQL React App</h1>
        <ExampleComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;