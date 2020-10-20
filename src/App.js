import React from 'react';
import s from './App.module.scss';
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <Container className ={s.body}  fluid={true}>
    <Row>
      <Col className ={s.head}>Щапка</Col>
    </Row>
    <Row>
      <Col className ={s.navig} xs="2">меню</Col>
      <Col xs="auto">место пользователя</Col>
    </Row>
    <Row>
      <Col className ={s.foot}>подвал</Col>
    </Row>
  </Container>
  );
}

export default App;
