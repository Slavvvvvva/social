import {combineReducers, createStore, applyMiddleware} from "redux";
import AuthPageReduser from "./authent-reduser";
import FrendsPageReduser from "./Frends-page-reduser";
import MesegesPageReduser from "./Meseges-page-reduser";
import UserPageReduser from "./User-page-reduser";
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
    UserPage: UserPageReduser,
    MesegesPage: MesegesPageReduser,
    FrendsPage: FrendsPageReduser,
    AuthData: AuthPageReduser
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware))
export default store