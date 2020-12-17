import React from 'react';
import ui from './ui.module.scss';
import avatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg'
import Loader from '../../Loader/loader';
import UserStatus from './user-status/user-status-hooks';

const UserInfo = (props) => {
    if(!props.ConteinerFrends){
        return(
            <Loader/>
        )
    }

    const LoadPhoto = (e) => {
       let fotoFile = e.target.files[0]
       props.UploadFileTC(fotoFile)
    }

    return (
        <div className={ui.space}>
            <div className={ui.avatar}>
                <img src={props.ConteinerFrends.photos.large || avatar} alt="avatar" />
                {!!props.match.params.userId || <input type ='file' onChange ={LoadPhoto}/> }
            </div>
            <div className={ui.info}>
                <p className={ui.name}>{props.ConteinerFrends.fullName}</p>
                <p>{props.ConteinerFrends.aboutMe}</p>
                <UserStatus {...props}/>
                <p>Creator this piece of .... React</p>
                <p>27 years old </p>
                <p>Bielsko - Biala, 43-300 Poland</p>
            </div>
        </div>
    )
}
export default UserInfo;