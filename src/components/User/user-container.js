import React from 'react';
import * as axios from 'axios'
import User from './user';
import { connect } from 'react-redux';
import {setUsersPageAC} from '../../Redax/User-page-reduser'

class UserContainer  extends React.Component{
    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(responce => {
                debugger
                console.log(responce)
                this.props.setUsersPageAC(responce.data)
            })   
    }
    
    render() {
        debugger
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

export default connect(mapStateToProps,{setUsersPageAC})(UserContainer)

