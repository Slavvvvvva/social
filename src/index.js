import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {store} from './Redax/State';

let RenderEntireTree = () => {
  return(
    ReactDOM.render(
      <React.StrictMode>
        <App posts= {store.getState()} dialogname = {store.getState()} meseges ={store.getState()} Dispatch = {store.Dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )  
}

RenderEntireTree (store.getState());
store.Suscribe (RenderEntireTree);
