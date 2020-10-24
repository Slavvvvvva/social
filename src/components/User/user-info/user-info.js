import React from 'react';
import ui from './ui.module.scss';
import avatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg'

const UserInfo = () => {
    return (
        <div className = {ui.space}> 
                <div className = {ui.avatar}>
                    <img src = {avatar} alt = "avatar" />
                </div>
                <div className = {ui.info}>
                    <p className = {ui.name}>Viacheslav Zhuravel</p>
                    <p>Super FrontEnd developer</p>
                    <p>React</p>
                    <p>27 years old </p>
                    <p>Bielsko - Biala, 43-300 Poland</p>
                </div>
        </div>
    )
}
export default UserInfo;