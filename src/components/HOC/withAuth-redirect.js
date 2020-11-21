
import React from 'react'
import { Redirect } from 'react-router-dom'

export const withAuthRedireact = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.ContainerAuthData) return <Redirect to = {'/login'} />

            return <Component {...this.props}/>
        }
    }

    return RedirectComponent
}