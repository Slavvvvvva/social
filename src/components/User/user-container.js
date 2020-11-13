import React from 'react'
import * as axios from 'axios'
import User from './user'
import { connect } from 'react-redux';
import {setUsersPageAC} from '../../Redax/User-page-reduser'
import { withRouter } from 'react-router-dom'

class UserContainer  extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!this.props.match.params.userId){
            userId = 2

        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
            .then(responce => {
                console.log(responce)
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
        ContainerShowLoader: state.FrendsPage.isLoader
    }
}
let UrlDataUserContainer =  withRouter(UserContainer)
export default connect(mapStateToProps,{setUsersPageAC})(UrlDataUserContainer)

