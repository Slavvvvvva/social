import {combineReducers, createStore} from "redux";
import MesegesPageReduser from "./Meseges-page-reduser";
import UserPageReduser from "./User-page-reduser";

let redusers = combineReducers({
    UserPage: UserPageReduser,
    MesegesPage: MesegesPageReduser
})

let store = createStore(redusers)
export default store