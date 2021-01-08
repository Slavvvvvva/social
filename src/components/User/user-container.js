import React, { useEffect } from 'react'
import User from './user'
import { connect } from 'react-redux';
import {setUsersPageAC, setUsersStatusAC, EditModeActionCreator, getUserStatusTC,putUserStatusTC,pushNewUserDataTC ,UploadFileTC, getUserDataTC } from '../../Redax/User-page-reduser'
import { withRouter } from 'react-router-dom'
import { getAuthData, getFrends, getUserStatus, showLoader, getEditMode} from '../../Redax/users-selector';
import { compose } from 'redux';
import { withAuthRedireact } from '../HOC/withAuth-redirect';

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

    useEffect( () => {
        let userId = props.match.params.userId
        if(!userId){
            userId = props.ContainerAuthData.id   
        }
        props.getUserDataTC(userId) 
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



export default compose(
   
    withRouter,
    //withAuthRedireact,
    connect(mapStateToProps,{setUsersPageAC, setUsersStatusAC,
        EditModeActionCreator,pushNewUserDataTC,
        getUserStatusTC,putUserStatusTC,
        UploadFileTC,getUserDataTC}),
)(UserContainer)

