import React from 'react';
import my from './my-meseges.module.scss';
import uavatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg';

const MyMessag = (props) =>{
    return (
        <div className = {my.my_space_chat}> 
            <img className = {my.user_logo_chat} src ={uavatar} alt = "mini avatar"/>
            <div>
                <p>{props.texxt}</p>
            </div>
        </div>
    )
}

export default MyMessag;