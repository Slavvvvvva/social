import { connect } from 'react-redux';
import { togleFolowAC, toglePageAC, togleShowLoaderAC,
        togleDisabladButtonAC, getUsersTC,
        getUsersButtonTC,follouUserTC,unFollouUserTC } from '../../Redax/Frends-page-reduser';
import { setUsersAC} from '../../Redax/Frends-page-reduser'
import Frends from './frendscopy'

let mapStateToProps = (state) =>{
    return {
        ConteinerFrends: state.FrendsPage,
        ContainerActivePage: state.FrendsPage.ActivePage,
        ContainerShowLoader: state.FrendsPage.isLoader,
        ContainerDisabledButton: state.FrendsPage.disabledButtond,
        ContainerAuthData: state.AuthData.isAuth
    }
}

/* let mapDispatchToProps = (dispatch) =>{
    return{
        ContainerToggleFollou: (id) => {
            dispatch(togleFolowAC(id))
        },
        ContainerSetUsers: (users)=> {
            dispatch(setUsersAC(users))
        },
        ConteinerTogglePage: (id) => {
            dispatch(toglePageAC(id))
        },
        ContainerToggleLoader: (showed) => {
            dispatch(togleShowLoaderAC(showed))
        }
    }
} */

const FrendsContainer = connect(mapStateToProps,
    {togleFolowAC,setUsersAC,toglePageAC,
    togleShowLoaderAC,togleDisabladButtonAC,
    getUsersTC, getUsersButtonTC,follouUserTC,
    unFollouUserTC })(Frends)
export default FrendsContainer
