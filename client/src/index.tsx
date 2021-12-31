import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'app/modules/App';
import reportWebVitals from './reportWebVitals';

import { store } from 'app/store';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-root'),
  );

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
