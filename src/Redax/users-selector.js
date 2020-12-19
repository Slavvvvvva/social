export const getFrends = (state) => {
    return  state.UserPage.UserData
}
export const showLoader =(state) => {
    return state.FrendsPage.isLoader
}
export const getUserStatus =(state) => {
    return state.UserPage.UserStatus
}
export const getAuthData = (state) => {
    return state.AuthData
}
export const getEditMode = (state) => {
    return state.UserPage.EditMode
}