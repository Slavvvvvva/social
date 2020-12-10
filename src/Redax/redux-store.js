import {combineReducers, createStore, applyMiddleware,compose} from "redux";
import AuthPageReduser from "./authent-reduser";
import FrendsPageReduser from "./Frends-page-reduser";
import MesegesPageReduser from "./Meseges-page-reduser";
import UserPageReduser from "./User-page-reduser";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import AppReduser from "./app-reduser";

let redusers = combineReducers({
    UserPage: UserPageReduser,
    MesegesPage: MesegesPageReduser,
    FrendsPage: FrendsPageReduser,
    AuthData: AuthPageReduser,
    form: formReducer,
    app: AppReduser,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
    ));
export default store