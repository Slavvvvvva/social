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
        <ListGroupItem className={newClass} > <a href ="/myprofile" >Моя страница <Badge pill>1</Badge></a> </ListGroupItem>
        <ListGroupItem className={newClass}> <a href ="/frends" >Друзья <Badge pill>2</Badge></a></ListGroupItem>
        <ListGroupItem className={newClass}> <a href ="/meseges" >Сообщения <Badge pill>11</Badge></a> </ListGroupItem>
        <ListGroupItem className={newClass}> <a href ="/news" >Новости <Badge pill>22</Badge></a></ListGroupItem>
        <ListGroupItem className={last}></ListGroupItem>
        <ListGroupItem className={newClass}> <a href ="/settings" >Настройки <Badge pill>1</Badge></a></ListGroupItem>
    </ListGroup>
    </Col>
  )
}

export default Nawigation;