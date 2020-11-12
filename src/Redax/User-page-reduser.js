
let initialState = {
  PostsData: [
    { id: 1, massege: "Я начал учить реакт и я его закончу", likeCounter: 500 },
    { id: 2, massege: "Розобрался с пропсами", likeCounter: 300 },
    { id: 3, massege: "Начну скгодня делать страницу с сообщениями", likeCounter: 400 },
    { id: 4, massege: "Научился переключатся между страницами", likeCounter: 500 },
    { id: 5, massege: "Я сделал страницу с сообщениями", likeCounter: 550 },
  ],
  UserData:null
}

let ADD_NEW_POST = 'ADD_NEW_POST'
let AddPostActionCreator = (text) => {
  return (
    {
      type: ADD_NEW_POST,
      post: text
    }
  )
}

const SET_USERS_PAGE ="SET_USERS_PAGE"
let setUsersPageAC = (users) => {
    return(
        {
            type: SET_USERS_PAGE,
            users:users
        }
    )
}


let UserPageReduser = (state = initialState, action) => {
    if (action.type === ADD_NEW_POST) {
        let newData = { id: "6", massege: action.post, counter: 5 }
        let stateCopy = {...state}
        stateCopy.PostsData =[...state.PostsData]
        stateCopy.PostsData.push(newData)
        return stateCopy
      } else if ( action.type === SET_USERS_PAGE ) {
        return {...state, UserData: action.users}
      }
    return state
}

export default UserPageReduser
export {AddPostActionCreator}
export {setUsersPageAC}