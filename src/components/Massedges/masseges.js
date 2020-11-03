import React from 'react';
import { ListGroup } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss'

const Chat = (props) => {
    let TaickPost = React.createRef();
    let DialogName = () => props.ContainerDialogName
    let AddMessege = () => props.ContainerAddMessege(TaickPost)
    return (
        <Col className={m.wrapper}>
            <ListGroup className={m.user_list}>
                {DialogName}
            </ListGroup>
            <div className={m.space}>
                <div className={m.space_messs}>
                    {props.MyMessageContent}
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