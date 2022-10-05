import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import store,{persistor} from '../src/reducers/store';
import { Provider } from 'react-redux';
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";


export const client = new ApolloClient({
  uri: ' http://localhost:4000/',
  cache : new InMemoryCache(),
}); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </ApolloProvider>
);


