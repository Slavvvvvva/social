let ADD_NEW_MESSAGE = 'ADD_NEW_MESSEGE'
let AddMessegeActionCreator = (text) => {
  return (
    {
      type: ADD_NEW_MESSAGE,
      text: text
    }
  )
}

let initialState = {
  DialogNameData: [
    { id: "1", name: "Машuа", counter: "3" },
    { id: "2", name: "Петя петух", counter: "2" },
    { id: "3", name: "Ваня", counter: "4" },
    { id: "4", name: "Костя Чмо", counter: "1" },
    { id: "5", name: "Маг", counter: "2" },
    { id: "6", name: "Квіточка", counter: "2" },
  ],

  MasegesData: [
    { id: 1, text: "МДа ты охеренный" },
    { id: 0, text: "Не споорся ты реально такій" },
    { id: 1, text: "Ну ладно уговорив" },
    { id: 0, text: "МДа ты охеренный" },
    { id: 1, text: "Ну ладно уговорив" },
    { id: 0, text: "МДа ты охеренный" },
    { id: 0, text: "Не споорся ты реально такій" },
    { id: 1, text: "Ну ладно уговорив" },
    { id: 1, text: "Ну ладно уговорив" },
    { id: 0, text: "МДа ты охеренный" },
  ]
}

let MesegesPageReduser = (state = initialState, action) =>{
    if (action.type === 'ADD_NEW_MESSEGE') {
        debugger
        let newData = { id: "1", text: action.text };
        let stateCopy = {...state}
        stateCopy.MasegesData = [...state.MasegesData]
        stateCopy.MasegesData.push(newData)
        return stateCopy
      }
    return state
}
export default MesegesPageReduser
export {AddMessegeActionCreator}
