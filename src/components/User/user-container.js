import React, { useEffect } from 'react'
import * as axios from 'axios'
import User from './user'
import { connect } from 'react-redux';
import {setUsersPageAC, setUsersStatusAC, EditModeActionCreator, getUserStatusTC,putUserStatusTC, UploadFileTC } from '../../Redax/User-page-reduser'
import { withRouter } from 'react-router-dom'
import {getUserProfile} from '../API/api'
import { getAuthData, getFrends, getUserStatus, showLoader, getEditMode} from '../../Redax/users-selector';

/* class UserContainer  extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.ContainerAuthData.id   
        }
        getUserProfile(userId)
            .then(responce => {
                this.props.setUsersPageAC(responce.data)
            })   
    }
    
    render() {
        return(
            <User {...this.props} />
        )
    }
} */


const UserContainer = (props,) => {

    useEffect( () => {
        let userId = props.match.params.userId
        if(!userId){
            userId = props.ContainerAuthData.id   
        }
        getUserProfile(userId)
            .then(responce => {
                props.setUsersPageAC(responce.data)
            })  
    },[props.match.params.userId, props.ContainerAuthData.id])

    return(
        <User {...props} />
    )
}

let mapStateToProps = (state) => {
    return  {
        ConteinerFrends: getFrends(state),
        ContainerShowLoader: showLoader(state),
        ContainearUserStatus: getUserStatus(state),
        ContainerAuthData: getAuthData(state),
        ContainerEditMode: getEditMode(state)
    }
}


let UrlDataUserContainer =  withRouter(UserContainer)
export default connect(mapStateToProps,{setUsersPageAC, setUsersStatusAC, EditModeActionCreator, getUserStatusTC,putUserStatusTC, UploadFileTC})(UrlDataUserContainer)

