import React from 'react'
import Header from './header'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {authUserDataAC} from '../../Redax/authent-reduser'


class HeaderContainer extends React.Component{
    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}) // добавляется если  нужно отарвыить вместе с соосе
        .then(responce => {
            if (responce.data.resultCode === 0)
            this.props.authUserDataAC(responce.data.data)
        }) 
    }
    render() {
        return (
            <>
            <Header {...this.props} />
            
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return  {
        ConteinerAuthUserData: state.AuthData,
    }
}
let UrlDataHeaderContainer =  withRouter(HeaderContainer)
export default connect(mapStateToProps,{authUserDataAC})(UrlDataHeaderContainer)