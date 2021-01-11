import React, { useEffect } from 'react';
import u from './u.module.scss';
import ComentsContainer from './coments/coments-container';
import UserInfo from './user-info/user-info';
import { Redirect } from 'react-router-dom';


const User = (props) => {



  if (!props.ContainerAuthData.isAuth)  {debugger
            return <Redirect to = {'/login'} />} 

    return (
        <div className={u.user}>
            <UserInfo {...props} />
            {!!props.match.params.userId ||
                <ComentsContainer />}
        </div>
    )
}
export default User;