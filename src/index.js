import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Redax/redux-store';
import { Provider } from 'react-redux';

    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider >,document.getElementById('root')
    )
 