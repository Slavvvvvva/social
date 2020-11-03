let ADD_NEW_MESSAGE = 'ADD_NEW_MESSEGE'
let AddMessegeActionCreator = (text) => {
  return (
    {
      type: ADD_NEW_MESSAGE,
      text: text
    }
  )
}

let MesegesPageReduser = (state, action) =>{
    if (action.type === 'ADD_NEW_MESSEGE') {
        debugger
        let newData = { id: "1", text: action.text };
        
        state.push(newData)
      }
    return state
}
export default MesegesPageReduser
export {AddMessegeActionCreator}
