import React from 'react'
import Header from './header'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {getIsLogginedTC, LogautTC} from '../../Redax/authent-reduser'


class HeaderContainer extends React.Component{
  
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
export default connect(mapStateToProps,{ LogautTC})(UrlDataHeaderContainer)