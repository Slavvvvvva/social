let initialState = {
    FrendsPage:[
        
    ]
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
        case SET_USERS : return {...state, FrendsPage: [...state.FrendsPage, ...action.users] }
        default : return state
    }
}
 export default FrendsPageReduser
 export {togleFolowAC}
 export {setUsersAC}