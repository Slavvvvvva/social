import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';

const Chat = (props) => {
    return (
        <Col className = {m.wrapper}>
            <ListGroup className ={m.user_list}>
                <ListGroupItem color="info" >Маша <Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem color="info" >Петя<Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem color="info">Ваня петух <Badge pill>1</Badge></ListGroupItem>
                <ListGroupItem color="info" >Маш <Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem color="info" >Иван Викторович<Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem color="info" >ВИктор чмо <Badge pill>1</Badge></ListGroupItem>
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