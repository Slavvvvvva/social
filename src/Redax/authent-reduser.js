import {getIsLogginned} from '../components/API/api'

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

export const getIsLogginedTC = () => {
    return(dispatch) => {
        getIsLogginned()
        .then(responce => {
            if (responce.resultCode === 0)
            dispatch(authUserDataAC(responce.data))
        }) 
    }
}

let AuthPageReduser = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_USER_DATA : return {...state, ...action.authData, isAuth: true }
        default : return state
    }
}
 export default AuthPageReduser
 export {authUserDataAC}