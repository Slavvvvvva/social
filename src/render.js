import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {AddNewPost} from './Redax/State'
import {AddNewMessege} from './Redax/State'

let RenderEntireTree = (state) => {
  return(
    ReactDOM.render(
      <React.StrictMode>
        <App posts= {state.userPage.PostsData} dialogname = {state.mesegesPage.DialogNameData} meseges ={state.mesegesPage.MasegesData} AddNewPost ={AddNewPost} AddNewMessege = {AddNewMessege} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )  
}

export default RenderEntireTree;