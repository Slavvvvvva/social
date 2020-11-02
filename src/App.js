import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/header';
import Nawigation from './components/Navigation/nawigation';
import User from './components/User/user';
import Chat from './components/Massedges/masseges';



function App(props) {
   return (
      <BrowserRouter>
         <div className={s.body}>
            <Row>
               <Col className={s.head}><Header /></Col>
            </Row>
            <Row className={s.content}>
               <Nawigation />
               <Route path='/meseges' render ={ () => <Chat dialogname  ={props.dialogname} meseges = {props.meseges} Dispatch = {props.Dispatch} /> } />
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
