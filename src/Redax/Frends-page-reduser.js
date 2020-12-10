import {getUsers, follouUser, unfollouUser} from '../components/API/api'


let initialState = {
    FrendsPage:[
    ],
    ActivePage:[
        {id:1, active:true},
        {id:2, active:false},
        {id:3, active:false},
        {id:4, active:false},
        {id:5, active:false},
    ],
    totalUserCount: 0,
    isLoader: false,
    disabledButtond:[]
}

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
let setUsersCountAC = (count) => {
    return(
        {
            type: TOGLE_DISABLED_BUTTON,
            count: count
        }
    )
}

const TOGLE_DISABLED_BUTTON = "TOGLE_DISABLED_BUTTON"
let togleDisabladButtonAC = (bisabled, id) => {
    return(
        {
            type: TOGLE_DISABLED_BUTTON,
            bisabled: bisabled,
            id: id
        }
    )
}

const TOGLE_SHOW_LOADER = "TOGLE_SHOW_LOADER"
let togleShowLoaderAC = (showed) => {
    return(
        {
            type: TOGLE_SHOW_LOADER,
            showed: showed
        }
    )
}

const TOGLE_PAGE = "TOGLE_PAGE"
let toglePageAC = (id) => {
    return(
        {
            type: TOGLE_PAGE,
            id: id
        }
    )
}

const TOGLE_FOLLOW = "TOGLE_FOLLOW"
let togleFolowAC = (id) =>{
    return(
        {
        type: TOGLE_FOLLOW,
        id: id        
        }
    )
}

const SET_USERS ="SET_USERS"
let setUsersAC = (users) => {
    return(
        {
            type: SET_USERS,
            users:users
        }
    )
}

export const getUsersTC = (currentPage) => {
     return(dispatch) => { 
     dispatch(togleShowLoaderAC(true))
        getUsers(currentPage)
            .then(responce => {
                dispatch(setUsersAC(responce.items))
                dispatch(setUsersCountAC(responce.totalCount))
                dispatch(togleShowLoaderAC(false))
            })
    }

}

export const getUsersButtonTC = (id) => {
    return(dispatch) => {
        dispatch(toglePageAC(id))
        dispatch(togleShowLoaderAC(true))
        getUsers(id)
            .then(responce => {
                dispatch(setUsersAC(responce.items))
                dispatch(togleShowLoaderAC(false))
            }) 
    }
}
export const follouUserTC = (id) => {
    return(dispatch) => {
        dispatch(togleDisabladButtonAC(true, id))
        follouUser(id)
            .then(responce => {
                dispatch(togleDisabladButtonAC(false, id))
                if (responce.data.resultCode === 0) dispatch(togleFolowAC(id))
            })
    }
}
export const unFollouUserTC = (id) => {
    return(dispatch) => {
        dispatch(togleDisabladButtonAC(true, id))
        unfollouUser(id)
            .then(responce => {
                dispatch(togleDisabladButtonAC(false, id))
                if (responce.data.resultCode === 0) dispatch(togleFolowAC(id))
            })
    }
}

let FrendsPageReduser = (state = initialState, action) => {
    switch(action.type) {
        case TOGLE_FOLLOW :  return {...state, 
            FrendsPage: state.FrendsPage.map((item) => {
                if (item.id === action.id) {
                    return{...item, followed:!item.followed}
                }
                return{...item}
            })
        }
        case SET_USERS : return {...state, FrendsPage: [...action.users] }
        case TOGLE_PAGE : return {...state, 
            ActivePage: state.ActivePage.map( (item) => {
                 if (item.id === action.id) {
                     return {...item, active: true }
                }
                return {...item, active: false}
            }
        )}
        case TOGLE_SHOW_LOADER : return {...state, isLoader: action.showed }
        case SET_TOTAL_USERS_COUNT : return {...state, totalUserCount: action.count}
        default : return state
        case TOGLE_DISABLED_BUTTON: return {...state, disabledButtond: action.bisabled ? [...state.disabledButtond, action.id]: state.disabledButtond.filter(item => item !== action.id)  }
    }
}


 export default FrendsPageReduser
 export {togleFolowAC}
 export {setUsersAC}
 export {toglePageAC}
 export {togleShowLoaderAC}
 export {togleDisabladButtonAC}