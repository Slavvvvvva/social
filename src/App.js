import React from 'react';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import HeaderContainer from './components/Header/headerContainer';
import Nawigation from './components/Navigation/nawigation';
import UserContainer from './components/User/user-container';
import ChatContainer from './components/Massedges/messeges.container'
import FrendsContainer from './components/Frends/frendes-container'

function App(props) {
   return (
      <BrowserRouter>
         <div className={s.body}>
            <Row>
               <Col className={s.head}> <HeaderContainer/> </Col>
            </Row>
            <Row className={s.content}>
               <Nawigation />
               <Route path='/meseges' render ={ () => <ChatContainer store = {props.store}  /> } />
               <Route path='/myprofile/:userId?' render={ () =>  <UserContainer store = {props.store} /> } />
               <Route path='/frends' render={ () =>  <FrendsContainer store = {props.store} /> } />
            </Row>
            <Row>
               <Col className={s.foot}>подвал</Col>
            </Row>
         </div>
      </BrowserRouter>

   );
}

export default App;
