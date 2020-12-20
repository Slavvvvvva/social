import React from 'react';
import ui from './ui.module.scss';
import avatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg'
import Loader from '../../Loader/loader';
import UserStatus from './user-status/user-status-hooks';
import UserInfoEditModeForm from './user-edit-mode/user-edit-mode';

const UserInfo = (props) => {
    debugger
    if (!props.ConteinerFrends) {
        return (
            <Loader />
        )
    }

    const LoadPhoto = (e) => {
        let fotoFile = e.target.files[0]
        props.UploadFileTC(fotoFile)
    }
    
    const UserInfoData = (formData) => {
        props.pushNewUserDataTC(formData)
        //props.EditModeActionCreator()
      
    }
    const chaingeEditMode = () => {
        props.EditModeActionCreator()
    }


    return (
        <div className={ui.space}>
            <div className={ui.avatar}>
                <img src={props.ConteinerFrends.photos.large || avatar} alt="avatar" />
                {!!props.match.params.userId || <input type='file' onChange={LoadPhoto} />}
            </div>
            < div className={ui.info}>
                <div>
                    <button onClick ={chaingeEditMode} >Edit</button>
                </div>

                {(!props.ContainerEditMode) ?
                    <>
                        <p className={ui.name}>{props.ConteinerFrends.fullName}</p>
                        <p>{props.ConteinerFrends.aboutMe}</p>
                        <UserStatus {...props}  />
                        <p>Поиск роботы :</p> {(props.ConteinerFrends.lookingForAJob) ? <p>Ищу</p> : <p>Не ищу</p>}
                        <p>Описание желаемой работы : </p>  <p> {props.ConteinerFrends.lookingForAJobDescription} </p>
                        <p>Контакты</p> : <p>facebook : {props.ConteinerFrends.contacts.facebook} </p>
                        <p>website :{props.ConteinerFrends.contacts.website} </p>
                        <p>vk : {props.ConteinerFrends.contacts.vk} </p>
                        <p>twitter : {props.ConteinerFrends.contacts.twitter} </p>
                        <p>instagram : {props.ConteinerFrends.contacts.instagram} </p>
                        <p>youtube : {props.ConteinerFrends.contacts.youtube} </p>
                        <p>github : {props.ConteinerFrends.contacts.github} </p>
                        <p>mainLink : {props.ConteinerFrends.contacts.mainLink} </p>
                    </> :
                    <UserInfoEditModeForm onSubmit={UserInfoData}  {...props} initialValues = {props.ConteinerFrends}/>
                }
            </div>
        </div>
    )
}
export default UserInfo;