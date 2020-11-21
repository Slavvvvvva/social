import React from 'react'
import Header from './header'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {getIsLogginedTC} from '../../Redax/authent-reduser'


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getIsLogginedTC()
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
export default connect(mapStateToProps,{getIsLogginedTC})(UrlDataHeaderContainer)