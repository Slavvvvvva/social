let ADD_NEW_POST = 'ADD_NEW_POST'
let AddPostActionCreator = (text) => {
  return (
    {
      type: ADD_NEW_POST,
      post: text
    }
  )
}

let UserPageReduser = (state, action) => {
    if (action.type === 'ADD_NEW_POST') {
        let newData = { id: "6", massege: action.post, counter: 5 }
        state.push(newData)
      } 
    return state
}

export default UserPageReduser
export {AddPostActionCreator}