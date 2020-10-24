import React, { useState } from 'react';
import n from './n.module.scss';
import { Col } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Nawigation = () => {

    let newClass = `justify-content-between ${n.list} `
    let last = `justify-content-between ${n.list} ${n.last}`

  return (
    <Col className ={n.navig} xs="2">
      <ListGroup className ={n.list_groop} >
      <ListGroupItem className={newClass} >Моя страница <Badge pill>2</Badge></ListGroupItem>
      <ListGroupItem className={newClass}>Друзья <Badge pill>14</Badge></ListGroupItem>
      <ListGroupItem className={newClass}>Сообщения <Badge pill>2</Badge></ListGroupItem>
      <ListGroupItem className={newClass}>Новости <Badge pill>2</Badge></ListGroupItem>
      <ListGroupItem className={last}></ListGroupItem>
      <ListGroupItem className={newClass}>Настройки <Badge pill>1</Badge></ListGroupItem>
    </ListGroup>
    </Col>
  )
}

export default Nawigation;