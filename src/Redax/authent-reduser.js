let initialState = {
    Id: null,
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
let AuthPageReduser = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_USER_DATA :  return {...state, ...action.authData }
        default : return state
    }
}
 export default AuthPageReduser
 export {authUserDataAC}