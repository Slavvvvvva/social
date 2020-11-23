import React from 'react'
import * as axios from 'axios'
import User from './user'
import { connect } from 'react-redux';
import {setUsersPageAC, setUsersStatusAC, getUserStatusTC} from '../../Redax/User-page-reduser'
import { withRouter } from 'react-router-dom'
import {getUserProfile} from '../API/api'

class UserContainer  extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!this.props.match.params.userId){
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
}

let mapStateToProps = (state) => {
    return  {
        ConteinerFrends: state.UserPage.UserData,
        ContainerShowLoader: state.FrendsPage.isLoader,
        ContainearUserStatus: state.UserPage.UserStatus,
        ContainerAuthData: state.AuthData
    }
}
let UrlDataUserContainer =  withRouter(UserContainer)
export default connect(mapStateToProps,{setUsersPageAC, setUsersStatusAC, getUserStatusTC})(UrlDataUserContainer)

