import { getUserStatus, putFoto, putUserStatus } from "../components/API/api"

let initialState = {
  PostsData: [
    { id: 1, massege: "Я начал учить реакт и я его закончу", likeCounter: 500 },
    { id: 2, massege: "Розобрался с пропсами", likeCounter: 300 },
    { id: 3, massege: "Начну скгодня делать страницу с сообщениями", likeCounter: 400 },
    { id: 4, massege: "Научился переключатся между страницами", likeCounter: 500 },
    { id: 5, massege: "Я сделал страницу с сообщениями", likeCounter: 550 },
  ],
  UserData:null,
  UserStatus:'статуса нет',
  EditMode: true
}

let CHAINGE_EDIT_MODE = 'CHAINGE_EDIT_MODE'
let EditModeActionCreator = () => {
  return (
    {
      type: CHAINGE_EDIT_MODE,
    }
  )
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
const SET_USERS_SATATUS ="SET_USERS_SATATUS "
let setUsersStatusAC = (userStatus) => {
    return(
        {
            type: SET_USERS_SATATUS  ,
            userStatus: userStatus
        }
    )
}

export const getUserStatusTC = (userId) => {
  return(dispatch) => { 
     getUserStatus(userId)
         .then(responce => {
             dispatch(setUsersStatusAC (responce.data))
         })
 }
}

export const putUserStatusTC = (status) => {
  return(dispatch) => { 
     putUserStatus(status)
         .then(responce => {
          if (responce.data.resultCode === 0) dispatch(setUsersStatusAC(status))
         })
 }
}

export const UploadFileTC = (foto) => {
  return(dispatch) => { 
     putFoto(foto)
         .then(responce => {
           debugger
          if (responce.data.resultCode === 0) dispatch(setUsersPageAC(responce.data.data))
        })
 }
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
      } else if (action.type === SET_USERS_SATATUS ) {
        return {...state, UserStatus: action.userStatus}
      } else if (action.type === CHAINGE_EDIT_MODE) {
        return {...state, EditMode : !state.EditMode}
      }
    return state
}

export default UserPageReduser
export {AddPostActionCreator}
export {setUsersPageAC}
export {setUsersStatusAC}
export {EditModeActionCreator}