import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import state from './Redax/State'

ReactDOM.render(
  <React.StrictMode>
    <App posts= {state.userPage.PostsData} dialogname = {state.mesegesPage.DialogNameData} meseges ={state.mesegesPage.MasegesData} />
  </React.StrictMode>,
  document.getElementById('root')
);



