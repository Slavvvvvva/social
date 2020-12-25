import { stopSubmit } from 'redux-form'
import {getIsLogginned, Login, LogOut, getCapcha} from '../components/API/api'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
 let SET_USER_DATA = 'SET_USER_DATA'
 let authUserDataAC = (authData) => {
    return(
        {
            type: SET_USER_DATA,
            authData: authData
        }
    )
}

let SET_CAPTCHA = 'SET_CAPTCHA'
let setCaptchaAC = (captcha) => {
   return(
       {
           type: SET_CAPTCHA,
           captcha: captcha
       }
   )
}

let DEL_USER_DATA = 'DEL_USER_DATA'
let delAuthUserDataAC = () => {
   return(
       {
           type: DEL_USER_DATA
       }
   )
}


export const getIsLogginedTC = () => {
    return(dispatch) => {
        return getIsLogginned()
        .then(responce => {
            if (responce.resultCode === 0){
                dispatch(authUserDataAC(responce.data))
            } else if (responce.resultCode === 1) {
                dispatch(delAuthUserDataAC())
            }
        }) 
    }
}
export const getCaptchaTC = () => {
    return(dispatch) => {
        return getCapcha()
        .then(responce => {
            
            dispatch(setCaptchaAC(responce.url))
            
        }) 
    }
}
export const LoginTC = (login, password, rememberMe, captcha) => {
    return(dispatch) => {
        Login(login, password, rememberMe, captcha)
        .then(responce => {
            if (responce.data.resultCode === 0){
            dispatch( getIsLogginedTC())
            } else {
                debugger
                if (responce.data.resultCode === 10) dispatch(getCaptchaTC())
                dispatch(stopSubmit('Login', {_error: responce.data.messages}))
                
            }
        }) 
    }
}
export const LogautTC = () => {
    return(dispatch) => {
        LogOut()
        .then(responce => {
            if (responce.resultCode === 0)
            debugger
            dispatch( getIsLogginedTC())
        }) 
    }
}


let AuthPageReduser = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_USER_DATA : return {...state, ...action.authData, isAuth: true }
        
        case DEL_USER_DATA : return {...state, id: null, email: null, login: null, isAuth: false, captchaUrl: null}
        case SET_CAPTCHA : return {...state, captchaUrl: action.captcha}
        default : return state
    }
}
 export default AuthPageReduser
 export {authUserDataAC}