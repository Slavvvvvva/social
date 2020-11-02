import React from 'react';
import { ListGroup } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Col } from 'reactstrap';
import m from './m.module.scss';
import MyMessag from './my-meseges/my-meseges';
import OponentMesage from './oponent-meseges/oponent-meseges';
import DialogItem from './dialog-item/dialog-item.js';


const Chat = (props) => {

   
    let DialogName = props.dialogname.mesegesPage.DialogNameData.map((item) => {
        return (
            <DialogItem dialog_name={item.name} massege_counter={item.counter} id={item.id} />
        )
    });

    let MyMessageContent = props.meseges.mesegesPage.MasegesData.map((item) => {
        return (
            (item.id === 1) ? <MyMessag texxt={item.text} /> : <OponentMesage texxt={item.text} />
        )
    })

    let TaickPost = React.createRef();
    

    let AddMessege = () => {
        let action = {
            type: 'ADD_NEW_MESSEGE',
            text: TaickPost.current.value
        }
        props.Dispatch(action)
        TaickPost.current.value = ""
    }


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