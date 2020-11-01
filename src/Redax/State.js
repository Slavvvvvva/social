
let store = {
  _state  : {
    userPage: {
      PostsData: [
        { id: 1, massege: "Я начал учить реакт и я его закончу", likeCounter: 500 },
        { id: 2, massege: "Розобрался с пропсами", likeCounter: 300 },
        { id: 3, massege: "Начну скгодня делать страницу с сообщениями", likeCounter: 400 },
        { id: 4, massege: "Научился переключатся между страницами", likeCounter: 500 },
        { id: 5, massege: "Я сделал страницу с сообщениями", likeCounter: 550 },
      ]

    },
    mesegesPage: {
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
  },
  getState() {
    return this._state
  },
  AddNewPost(mes) {
    let newData = { id: "6", massege: mes, counter: 5 };
    this._state.userPage.PostsData.push(newData)
    this._RenderEntireTree(this._state)
  },
  AddNewMessege(text) {
    let newData = { id: "1", text: text };
    this._state.mesegesPage.MasegesData.push(newData)
    this._RenderEntireTree(this._state)
  },
  _RenderEntireTree() {

  },
  Suscribe(observer) {
    this._RenderEntireTree = observer;
  }
}

export {store};
