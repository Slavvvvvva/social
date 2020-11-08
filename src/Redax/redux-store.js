import {combineReducers, createStore} from "redux";
import FrendsPageReduser from "./Frends-page-reduser";
import MesegesPageReduser from "./Meseges-page-reduser";
import UserPageReduser from "./User-page-reduser";

let redusers = combineReducers({
    UserPage: UserPageReduser,
    MesegesPage: MesegesPageReduser,
    FrendsPage: FrendsPageReduser
})

let store = createStore(redusers)
export default store