import React from 'react';
import { Col } from 'reactstrap';
import u from './u.module.scss';
import avatar from '../Img/982da289bae6d7738358d8fec285acc8.jpg'
import Coments from './coments/coments';
import UserInfo from './user-info/user-info';

const User = () => {
    return (
        <Col className = {u.user}>
            <UserInfo/>
            <Coments/> 
        </Col>
    )
}  
export default User;