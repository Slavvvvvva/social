import React from 'react';
import op from './oponent-meseges.module.scss';
import uavatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg';


const OponentMesage = (props) => {
    return (
        <div className = {op.oponent_space_chat}> 
            <img className = {op.user_logo_chat} src ={uavatar} alt = "mini avatar"/>
            <div>
                <p> {props.texxt} </p>
            </div>
        </div>
    )
}

export default OponentMesage;