import { stopSubmit } from 'redux-form'
import {getIsLogginned, Login, LogOut} from '../components/API/api'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
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
export const LoginTC = (login, password, rememberMe) => {
    return(dispatch) => {
        Login(login, password, rememberMe)
        .then(responce => {
            if (responce.resultCode === 0){
            dispatch( getIsLogginedTC())
            } else {
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
        
        case DEL_USER_DATA : return {...state, id: null, email: null, login: null, isAuth: false}
        default : return state
    }
}
 export default AuthPageReduser
 export {authUserDataAC}