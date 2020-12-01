import { getIsLogginedTC } from "./authent-reduser"

let initialState = {
    initialized: false
}

let SET_INITIALIZED = 'SET_INITIALIZED '
let initializedAC = () => {
    return(
        {
            type: SET_INITIALIZED ,
        }
    )
}

export const initializedTC = () => {
    return(dispatch) => {
        let promise = dispatch(getIsLogginedTC())
        promise.then( ()=>{
            dispatch(initializedAC()) 
        })
    }
}


let AppReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED : return {...state, initialized: true }
        default : return state
    }
}
 export default AppReduser
