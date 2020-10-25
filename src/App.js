import React from 'react';
import s from './App.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Nawigation from './components/Navigation/nawigation';
import User from './components/User/user';
import Chat from './components/Massedges/masseges';



function App() {
   return (
      <BrowserRouter>
         <Container className={s.body}>
            <Row>
               <Col className={s.head}><Header /></Col>
            </Row>
            <Row className={s.content}>
               <Nawigation />
               <Route path='/meseges' component={Chat} />
               <Route path='/myprofile' component={User} />
            </Row>
            <Row>
               <Col className={s.foot}>подвал</Col>
            </Row>
         </Container>
      </BrowserRouter>

   );
}

export default App;
