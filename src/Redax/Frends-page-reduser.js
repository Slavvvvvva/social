let initialState = {
    FrendsPage:[
    ],
    ActivePage:[
        {id:1, active:true},
        {id:2, active:false},
        {id:3, active:false},
        {id:4, active:false},
        {id:5, active:false},
    ]
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
        default : return state
    }
}


 export default FrendsPageReduser
 export {togleFolowAC}
 export {setUsersAC}
 export {toglePageAC}