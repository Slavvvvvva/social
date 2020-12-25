import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { LoginTC } from '../../Redax/authent-reduser'
import { Input } from '../Loader/textarea'
import { reqiredField } from '../../util/validation'
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
    const LoginData = (formData) => {
        props.LoginTC(formData.login, formData.Password, formData.rememberMe, formData.Captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/myprofile'} />
    }
    return (
        <>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={LoginData} {...props} />
            <div>
                {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
            </div>

        </>
    )
}

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[reqiredField]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} type={'password'} component={Input} validate={[reqiredField]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> <p>remember me</p>
            </div>
            <div> 
                {props.captchaUrl && <Field placeholder={'Captcha'} name={'Captcha'} component={Input} validate={[reqiredField]} />}
            </div>
            {props.error && <div>{props.error}</div>}
            <div>

                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'Login' })(Login)

let mapStateToProps = (state) => {
    return {
        isAuth: state.AuthData.isAuth,
        captchaUrl: state.AuthData.captchaUrl

    }
}

export default compose(
    connect(mapStateToProps, { LoginTC }),
)(LoginForm)
