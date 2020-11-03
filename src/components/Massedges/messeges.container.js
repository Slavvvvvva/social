import React from 'react'
import Chat from './masseges'
import DialogItem from './dialog-item/dialog-item.js';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';
import { AddMessegeActionCreator } from '../../Redax/Meseges-page-reduser';


const ChatContainer = (props) => {
    let state = props.store.getState();
    let ContainerDialogName = state.MesegesPage.DialogNameData.map((item) => {
        return (
            <DialogItem dialog_name={item.name} massege_counter={item.counter} id={item.id} />
        )
    })

    let ConteinerMyMessageContent = state.MesegesPage.MasegesData.map((item) => {
        return (
            (item.id === 1) ? <MyMessag texxt={item.text} /> : <OponentMesage texxt={item.text} />
        )
    })

    let ContainerAddMessege = (button) => {
        let action = AddMessegeActionCreator(button.current.value)
        props.store.dispatch(action)
        button.current.value = ""
    }

    return ( 
        <Chat ContainerDialogName = {ContainerDialogName} MyMessageContent = {ConteinerMyMessageContent} ContainerAddMessege = {ContainerAddMessege} />
    ) 
}
export default ChatContainer