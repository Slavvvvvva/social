import React from 'react';
import { Col } from 'reactstrap';
import u from './u.module.scss';
import ComentsContainer from './coments/coments-container';
import UserInfo from './user-info/user-info';


const User = (props) => {
    debugger
    return (
        <Col className = {u.user}>
            <UserInfo ConteinerFrends = {props.ConteinerFrends}/>
            <ComentsContainer /> 
        </Col>
    )
}  
export default User;