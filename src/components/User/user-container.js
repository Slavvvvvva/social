import React, { useEffect } from 'react'
import User from './user'
import { connect } from 'react-redux';
import {setUsersPageAC, setUsersStatusAC, EditModeActionCreator, getUserStatusTC,putUserStatusTC,pushNewUserDataTC ,UploadFileTC, getUserDataTC } from '../../Redax/User-page-reduser'
import { withRouter } from 'react-router-dom'
import { getAuthData, getFrends, getUserStatus, showLoader, getEditMode} from '../../Redax/users-selector';
import { compose } from 'redux';


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


const UserContainer = (props) => {
    const userId = props.match.params.userId
    const id = props.ContainerAuthData.id
    const isAuth = props.ContainerAuthData.isAuth
    
    useEffect ( () => {
        let userI = userId
        if(!userI){
            userI = id   
        }
        if (isAuth) props.getUserDataTC(userId) 
    },[userId, id, isAuth])
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



export default compose(
   
    withRouter,
    connect(mapStateToProps,{setUsersPageAC, setUsersStatusAC,
        EditModeActionCreator,pushNewUserDataTC,
        getUserStatusTC,putUserStatusTC,
        UploadFileTC,getUserDataTC}),
)(UserContainer)

