import React from 'react';
import { ListGroup } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss'
import DialogItem from './dialog-item/dialog-item.js';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';

const Chat = (props) => {
    const DialogName = props.ContainerDialogName.map((item) => {
        return (
            <DialogItem dialog_name={item.name} massege_counter={item.counter} id={item.id} />
        )
    })

    const MyMessageContent = props.ConteinerMyMessageContent.map((item) => {
        return (
            (item.id === 1) ? <MyMessag texxt={item.text} /> : <OponentMesage texxt={item.text} />
        )
    })
    
    let TaickPost = React.createRef();
    let AddMessege = () => props.ContainerAddMessege(TaickPost)
    return (
        <Col className={m.wrapper}>
            <ListGroup className={m.user_list}>
                {DialogName}
            </ListGroup>
            <div className={m.space}>
                <div className={m.space_messs}>
                    {MyMessageContent}
                </div>
                <InputGroup className={m.input}>
                    <input ref={TaickPost} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={AddMessege} color="secondary">Отправить</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </Col>
    )
}
export default Chat;