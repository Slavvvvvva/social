import React from 'react';
import { ListGroup} from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';
import DialogItem from './dialog-item/dialog-item.js';

let mesegeData =[
    {id : "1", name : "Машuа" , counter : "3"},
    {id : "2", name : "Петя петух" , counter : "2"},
    {id : "3", name : "Ваня" , counter : "4"},
    {id : "4", name : "Костя Чмо" , counter : "1"},
    {id : "5", name : "Маг" , counter : "2"},
    {id : "6", name : "Квіточка" , counter : "2"},
]


const Chat = (props) => {
    return (
        <Col className = {m.wrapper}>
            <ListGroup className ={m.user_list}>
                <DialogItem dialog_name = {mesegeData[0].name} massege_counter = {mesegeData[0].counter} id ={mesegeData[0].id} />
                <DialogItem dialog_name = "Петя петух" massege_counter = "1" id ="2" />
                <DialogItem dialog_name = "Ваня" massege_counter = "4" id ="3" />
                <DialogItem dialog_name = "Костя чмо" massege_counter = "" id ="4" />
                <DialogItem dialog_name = "Маш" massege_counter = "1" id ="5" />
                <DialogItem dialog_name = "Квіточка" massege_counter = "5" id ="6" />
                
            </ListGroup>
            <div className = {m.space}>
                <div className = {m.space_messs}>
                    <MyMessag texxt = "Да ты охеренный"/>
                    <OponentMesage texxt = "НЕ видумуй нахер пошол"/>
                    <MyMessag texxt = "Не споорся ты реально такій"/>
                    <OponentMesage texxt = "Ну ладно уговорив"/>
                    <MyMessag texxt = "Да ты охеренный"/>
                    <OponentMesage texxt = "НЕ видумуй нахер пошол"/>
                    <MyMessag texxt = "Не споорся ты реально такій"/>
                    <OponentMesage texxt = "Ну ладно уговорив"/>
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