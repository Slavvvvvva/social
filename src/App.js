import React from 'react';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/header';
import Nawigation from './components/Navigation/nawigation';
import User from './components/User/user';
import ChatContainer from './components/Massedges/messeges.container'

function App(props) {
   return (
      <BrowserRouter>
         <div className={s.body}>
            <Row>
               <Col className={s.head}><Header /></Col>
            </Row>
            <Row className={s.content}>
               <Nawigation />
               <Route path='/meseges' render ={ () => <ChatContainer store = {props.store}  /> } />
               <Route path='/myprofile' render={ () =>  <User posts ={props.posts} Dispatch = {props.Dispatch} /> } />
            </Row>
            <Row>
               <Col className={s.foot}>подвал</Col>
            </Row>
         </div>
      </BrowserRouter>

   );
}

export default App;
