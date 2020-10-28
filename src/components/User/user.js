import React from 'react';
import { Col } from 'reactstrap';
import u from './u.module.scss';
import Coments from './coments/coments';
import UserInfo from './user-info/user-info';


const User = (props) => {
    return (
        <Col className = {u.user}>
            <UserInfo/>
            <Coments wall = {props.posts} AddNewPost={props.AddNewPost}/> 
        </Col>
    )
}  
export default User;