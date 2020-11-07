import React from 'react'
import Chat from './masseges'
import DialogItem from './dialog-item/dialog-item.js';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';
import { AddMessegeActionCreator } from '../../Redax/Meseges-page-reduser';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        ContainerDialogName: () => {
            state.MesegesPage.DialogNameData.map((item) => {
                return (
                    <DialogItem dialog_name={item.name} massege_counter={item.counter} id={item.id} />
                )
            })
        },
        ConteinerMyMessageContent: () => {
            state.MesegesPage.MasegesData.map((item) => {
                return (
                    (item.id === 1) ? <MyMessag texxt={item.text} /> : <OponentMesage texxt={item.text} />
                )
            })
        }
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