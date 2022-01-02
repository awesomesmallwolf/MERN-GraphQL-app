import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';

import { App } from 'app/modules/App';
import reportWebVitals from './reportWebVitals';

import { store } from 'app/core/store';
import apolloClient from 'app/core/apollo-client';

const renderApp = () =>
  render(
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </ChakraProvider>,
    document.getElementById('app-root'),
  );

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
