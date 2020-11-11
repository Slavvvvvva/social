import { connect } from 'react-redux';
import { togleFolowAC, toglePageAC, togleShowLoaderAC } from '../../Redax/Frends-page-reduser';
import { setUsersAC} from '../../Redax/Frends-page-reduser'
import Frends from './frendscopy'

let mapStateToProps = (state) =>{
    return {
        ConteinerFrends: state.FrendsPage,
        ContainerActivePage: state.FrendsPage.ActivePage,
        ContainerShowLoader: state.FrendsPage.isLoader
    }
}

let mapDispatchToProps = (dispatch) =>{
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
}

const FrendsContainer = connect(mapStateToProps,mapDispatchToProps)(Frends)
export default FrendsContainer
