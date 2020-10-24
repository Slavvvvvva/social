import React from 'react';
import s from './App.module.scss';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header/header';
import Nawigation from './components/Navigation/nawigation';
import User from './components/User/user';


function App() {
  return (
    <Container className ={s.body}  fluid={true}>
    <Row>
      <Col className ={s.head}><Header/></Col>
    </Row>
    <Row>
     <Nawigation/>
      <User/>
    </Row>
    <Row>
      <Col className ={s.foot}>подвал</Col>
    </Row>
  </Container>
  );
}

export default App;
