import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Redax/redux-store';

let rerenderEntireTree = () => {
  return(
    ReactDOM.render(
      <React.StrictMode>
        <App store = {store} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )  
}

rerenderEntireTree (store.getState());
store.subscribe (() => {
  let state = store.getState()
  rerenderEntireTree(state)
});
