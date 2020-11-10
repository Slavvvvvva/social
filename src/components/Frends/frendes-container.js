import { connect } from 'react-redux';
import { togleFolowAC } from '../../Redax/Frends-page-reduser';
import { setUsersAC} from '../../Redax/Frends-page-reduser'
import Frends from './frendscopy'

let mapStateToProps = (state) =>{
    return {
        ConteinerFrends: state.FrendsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        ContainerToggleFollou: (id) => {
            dispatch(togleFolowAC(id))
        },
        ContainerSetUsers: (users)=> {
            dispatch(setUsersAC(users))
        }
    }
}

const FrendsContainer = connect(mapStateToProps,mapDispatchToProps)(Frends)
export default FrendsContainer
