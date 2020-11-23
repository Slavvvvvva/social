import React from 'react';
import n from './n.module.scss';
import { Col } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const Nawigation = (props) => {

  let newClass = `justify-content-between ${n.list} `
  let last = `justify-content-between ${n.list} ${n.last}`

 
  debugger
  return (
    <Col className={n.navig} xs="2">
      <ListGroup className={n.list_groop} >
        <ListGroupItem className={newClass} > <NavLink to={(props.ContainerAuthData)? `/myprofile/${props.ContainerAuthData.id}` :"/myprofile/"} activeClassName={n.activ_link}>Моя страница <Badge pill>1</Badge></NavLink> </ListGroupItem>
        <ListGroupItem className={newClass}> <NavLink to="/frends" activeClassName={n.activ_link} >Друзья <Badge pill>2</Badge></NavLink></ListGroupItem>
        <ListGroupItem className={newClass}> <NavLink to="/meseges" activeClassName={n.activ_link} >Сообщения <Badge pill>11</Badge></NavLink> </ListGroupItem>
        <ListGroupItem className={newClass}> <NavLink to="/news" activeClassName={n.activ_link} >Новости <Badge pill>22</Badge></NavLink></ListGroupItem>
        <ListGroupItem className={last}></ListGroupItem>
        <ListGroupItem className={newClass}> <NavLink to="/settings" activeClassName={n.activ_link} >Настройки <Badge pill>1</Badge></NavLink></ListGroupItem>
      </ListGroup>
    </Col>
  )
}

let mapStateToProps = (state) => {
  return  {
      ConteinerFrends: state.UserPage.UserData,
  }
}

export default connect(mapStateToProps,{})(Nawigation)