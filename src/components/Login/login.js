import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {LoginTC} from '../../Redax/authent-reduser'

const LoginForm = (props) => {
    const LoginData = (formData) => {
        console.log(formData)
        debugger
        props.LoginTC(formData.login, formData.Password, formData.rememberMe )
    }
    return (
        <>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={LoginData} />
        </>
    )
}

const Login= (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'Password'}  component={'input'} />
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'}  component={'input'}/> <p>remember me</p>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm =reduxForm( {form:'Login'})(Login)

let mapStateToProps = (state) => {
    return {
        
    }
}

export default compose (
    connect( mapStateToProps, {LoginTC}),
) (LoginForm)
