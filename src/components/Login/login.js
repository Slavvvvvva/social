import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { LoginTC } from '../../Redax/authent-reduser'
import { Input } from '../Loader/textarea'
import { reqiredField } from '../../util/validation'
import { Redirect } from 'react-router-dom'
import l from './l.module.scss'

const LoginForm = (props) => {
    const LoginData = (formData) => {
        props.LoginTC(formData.login, formData.Password, formData.rememberMe, formData.Captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/myprofile'} />
    }
    return (
        <div className={l.formWrapper}>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={LoginData} {...props} />
            <div>
                {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
            </div>

        </div>
    )
}

const Login = (props) => {
    return (
        <form className={l.form} onSubmit={props.handleSubmit}>
            <Field className={l.formfield} placeholder={'Login'} name={'login'} component={Input} validate={[reqiredField]} />
            <Field className={l.formfield} placeholder={'Password'} name={'Password'} type={'password'} component={Input} validate={[reqiredField]} />
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} value = {'fjdkjfkd'} /> <p>Remember me</p>
            </div>
            {props.captchaUrl && <Field placeholder={'Captcha'} name={'Captcha'} component={Input} validate={[reqiredField]} />}
            {props.error && <div>{props.error}</div>}
            <button>Login</button>

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
