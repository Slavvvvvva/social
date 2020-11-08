import React from 'react'
import Chat from './masseges'
import { AddMessegeActionCreator } from '../../Redax/Meseges-page-reduser';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        ContainerDialogName: state.MesegesPage.DialogNameData,
        ConteinerMyMessageContent: state.MesegesPage.MasegesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ContainerAddMessege: (button) => {
            let action = AddMessegeActionCreator(button.current.value)
            dispatch(action)
            button.current.value = ""
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer