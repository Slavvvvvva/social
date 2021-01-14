import { stopSubmit } from 'redux-form'
import { getIsLogginned, Login, LogOut, getCapcha, getUserProfile } from '../components/API/api'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    loginedUserImg: null,
    fullName: null
}

let SET_USER_IMG_NAME = 'SET_USER_IMG_NAME'
let setUserImgAC = (imgName) => {
    return(
        {
            type: SET_USER_IMG_NAME,
            imgName: imgName
        }
    )
}


let SET_USER_DATA = 'SET_USER_DATA'
let authUserDataAC = (authData) => {
    return (
        {
            type: SET_USER_DATA,
            authData: authData
        }
    )
}

let SET_CAPTCHA = 'SET_CAPTCHA'
let setCaptchaAC = (captcha) => {
    return (
        {
            type: SET_CAPTCHA,
            captcha: captcha
        }
    )
}

let DEL_USER_DATA = 'DEL_USER_DATA'
let delAuthUserDataAC = () => {
    return (
        {
            type: DEL_USER_DATA
        }
    )
}

export const getLogginedUserNameAndFotoTC = (id) => {
    return (dispatch) => {
        return getUserProfile(id)
            .then (responce => {
                if (responce.status === 200 ) {
                    dispatch(setUserImgAC({
                        name: responce.data.fullName,
                        foto: responce.data.photos
                    }))
                }
            })
    }
}


export const getIsLogginedTC = () => {
    return (dispatch) => {
        return getIsLogginned()
            .then(responce => {
                if (responce.resultCode === 0) {
                    dispatch(authUserDataAC(responce.data))
                } else if (responce.resultCode === 1) {
                    dispatch(delAuthUserDataAC())
                }
            })
    }
}
export const getCaptchaTC = () => {
    return (dispatch) => {
        return getCapcha()
            .then(responce => {

                dispatch(setCaptchaAC(responce.url))

            })
    }
}
export const LoginTC = (login, password, rememberMe, captcha) => {
    return (dispatch) => {
        Login(login, password, rememberMe, captcha)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(getIsLogginedTC())
                } else {
                    if (responce.data.resultCode === 10) dispatch(getCaptchaTC())
                    dispatch(stopSubmit('Login', { _error: responce.data.messages }))

                }
            })
    }
}
export const LogautTC = () => {
    return (dispatch) => {
        LogOut()
            .then(responce => {
                if (responce.status === 200)
                dispatch(getIsLogginedTC())
            })
    }
}


let AuthPageReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: return { ...state, ...action.authData, isAuth: true }
        case DEL_USER_DATA: return { ...state, id: null, email: null, login: null, isAuth: false, captchaUrl: null, loginedUserImg: null, fullName: null }
        case SET_CAPTCHA: return { ...state, captchaUrl: action.captcha }
        case SET_USER_IMG_NAME: return {...state, loginedUserImg: action.imgName.foto, fullName: action.imgName.name }
        default: return state
    }
}
export default AuthPageReduser
export { authUserDataAC }