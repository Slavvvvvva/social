import React from 'react';
import ui from './ui.module.scss';
import avatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg'
import Loader from '../../Loader/loader';

const UserInfo = (props) => {
    if(!props.ConteinerFrends){
        return(
            <Loader/>
        )
    }
    return (
        <div className={ui.space}>
            <div className={ui.avatar}>
                <img src={props.ConteinerFrends.photos.large} alt="avatar" />
            </div>
            <div className={ui.info}>
                <p className={ui.name}>{props.ConteinerFrends.fullName}</p>
                <p>{props.ConteinerFrends.aboutMe}</p>
                <p>Creator this piece of .... React</p>
                <p>27 years old </p>
                <p>Bielsko - Biala, 43-300 Poland</p>
            </div>
        </div>
    )
}
export default UserInfo;