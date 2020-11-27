import Chat from './masseges'
import { AddMessegeActionCreator } from '../../Redax/Meseges-page-reduser';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedireact } from '../HOC/withAuth-redirect';


let mapStateToProps = (state) => {
    return {
        ContainerDialogName: state.MesegesPage.DialogNameData,
        ConteinerMyMessageContent: state.MesegesPage.MasegesData,
        ContainerAuthData: state.AuthData.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ContainerAddMessege: (button) => {
            let action = AddMessegeActionCreator(button)
            dispatch(action)
           
        }
    }
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedireact,
) (Chat)