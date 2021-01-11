
import React from 'react'
import { Redirect } from 'react-router-dom'

export const withAuthRedireact = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.ContainerAuthData) return <Redirect to = {'/login'} />
               // else return <Redirect to = {`/${Component}`} />

            return <Component {...this.props}/>
        }
    }

    return RedirectComponent
}