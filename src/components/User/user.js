import React from 'react';
import { Col } from 'reactstrap';
import u from './u.module.scss';
import ComentsContainer from './coments/coments-container';
import UserInfo from './user-info/user-info';


const User = (props) => {
    return (
        <Col className = {u.user}>
            <UserInfo ConteinerFrends = {props.ConteinerFrends} getUserStatusTC = {props.getUserStatusTC} ContainearUserStatus={props.ContainearUserStatus}/>
            <ComentsContainer /> 
        </Col>
    )
}  
export default User;