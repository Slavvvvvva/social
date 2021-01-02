import React from 'react';
import u from './u.module.scss';
import ComentsContainer from './coments/coments-container';
import UserInfo from './user-info/user-info';


const User = (props) => {
    return (
        <div className = {u.user}>
            <UserInfo {...props}/>
            {!!props.match.params.userId ||
            <ComentsContainer /> }
        </div>
    )
}  
export default User;