import React, { useEffect } from 'react';
import ui from './ui.module.scss';
import avatar from '../../Img/982da289bae6d7738358d8fec285acc8.jpg'
import Loader from '../../Loader/loader';
import UserStatus from './user-status/user-status-hooks';
import UserInfoEditModeForm from './user-edit-mode/user-edit-mode';

const UserInfo = React.memo((props) => {



    const LoadPhoto = (e) => {
        let fotoFile = e.target.files[0]
        props.UploadFileTC(fotoFile)
    }

    const UserInfoData = (formData) => {
        props.pushNewUserDataTC(formData)
    }
    const chaingeEditMode = () => {
        props.EditModeActionCreator()
    }

    if (!props.ConteinerFrends) {
        return (
            <Loader />
        )
    }


    return (
        <div className={ui.space}>
            <div className={ui.avatar}>
                <img src={props.ConteinerFrends.photos.large || avatar} alt="avatar" />
                {!!props.match.params.userId ||
                    <>
                        <div className={ui.inputWrapper}>
                            <input type='file' id="input_file" onChange={LoadPhoto} />
                            <label for="input_file"></label>
                        </div>
                        <div className={ui.buttonWrapper}>
                            <button onClick={chaingeEditMode} id="button_chainge_suer_info" >Edit</button>
                            <label for="button_chainge_suer_info"></label>
                        </div>
                    </>
                }

            </div>
            < div className={ui.info}>

                {(!props.ContainerEditMode) ?
                    <div className={ui.infoWrapper}>
                        <p className={ui.name}>{props.ConteinerFrends.fullName}</p>
                        <UserStatus {...props} className={ui.status} />
                        <div className={ui.aboutMe} >
                            <p>  {props.ConteinerFrends.aboutMe}</p>
                        </div>
                        <div>
                            <p>Finding a job : {(props.ConteinerFrends.lookingForAJob) ? `Yes` : `No`} </p>
                        </div>
                        <p className= {ui.jobDescription}>Описание желаемой работы : {props.ConteinerFrends.lookingForAJobDescription} </p>
                        <div className = {ui.contacts}>
                            <span>My Contacts:</span>
                           <p> <br/> facebook : {props.ConteinerFrends.contacts.facebook} <br/>
                            website : {props.ConteinerFrends.contacts.website} <br/>
                            vk : {props.ConteinerFrends.contacts.vk} <br/>
                            twitter : {props.ConteinerFrends.contacts.twitter} <br/>
                            instagram : {props.ConteinerFrends.contacts.instagram} <br/>
                            youtube : {props.ConteinerFrends.contacts.youtube} <br/>
                            github : {props.ConteinerFrends.contacts.github} <br/>
                            mainLink : {props.ConteinerFrends.contacts.mainLink} </p>
                        </div>
                    </div> :
                    <UserInfoEditModeForm onSubmit={UserInfoData}  {...props} initialValues={props.ConteinerFrends} />
                }
            </div>
        </div>
    )
})
export default UserInfo;