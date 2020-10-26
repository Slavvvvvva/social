import React from 'react';
import { ListGroup} from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';
import DialogItem from './dialog-item/dialog-item.js';

let DialogNameData =[
    {id : "1", name : "Машuа" , counter : "3"},
    {id : "2", name : "Петя петух" , counter : "2"},
    {id : "3", name : "Ваня" , counter : "4"},
    {id : "4", name : "Костя Чмо" , counter : "1"},
    {id : "5", name : "Маг" , counter : "2"},
    {id : "6", name : "Квіточка" , counter : "2"},
]

let MasegesData = [
    {id : 1, text : "МДа ты охеренный" },
    {id : 0, text : "Не споорся ты реально такій"},
    {id : 1, text : "Ну ладно уговорив" },
    {id : 0, text : "МДа ты охеренный" },
    {id : 1, text : "Ну ладно уговорив" },
    {id : 0, text : "МДа ты охеренный" },
    {id : 0, text : "Не споорся ты реально такій"},
    {id : 1, text : "Ну ладно уговорив" },
    {id : 1, text : "Ну ладно уговорив" },
    {id : 0, text : "МДа ты охеренный" },
]   


let DialogName = DialogNameData.map( (item) => {
    return (
        <DialogItem dialog_name = {item.name} massege_counter = {item.counter} id ={item.id} /> 
    )
});

let MyMessageContent = MasegesData.map ((item) => {
    return (
        (item.id === 1)? <MyMessag texxt = {item.text}/> : <OponentMesage texxt = {item.text}/>
    )
})

const Chat = (props) => {
    return (
        <Col className = {m.wrapper}>
            <ListGroup className ={m.user_list}>
                {DialogName}
            </ListGroup>
            <div className = {m.space}>
                <div className = {m.space_messs}>
                    {MyMessageContent}
                </div>
                <InputGroup className = {m.input}>
                    <Input />
                        <InputGroupAddon addonType="append">
                        <Button color="secondary">Отправить</Button>
                        </InputGroupAddon>
                </InputGroup>
            
            </div>
        </Col>
    )
}
export default Chat;