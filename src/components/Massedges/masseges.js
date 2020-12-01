import React from 'react'
import { ListGroup } from 'reactstrap'
import { Col } from 'reactstrap'
import m from './m.module.scss'
import DialogItem from './dialog-item/dialog-item.js'
import MyMessag from './my-meseges/my-meseges'
import OponentMesage from './oponent-meseges/oponent-meseges'
import { Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { TextArea } from '../Loader/textarea'
import { reqiredField, validMaxLenght } from '../../util/validation'

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
    
    

    let AddMessege = (formData) => {
        console.log(formData)
        props.ContainerAddMessege(formData.massege)
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
                <AddMassegeReduxForm onSubmit={AddMessege} />
            </div>
        </Col>
    )
}
const MaxLenght100 = validMaxLenght(100) 
const AddMessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Massege'} name={'massege'} component={TextArea} validate = {[reqiredField, MaxLenght100]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMassegeReduxForm =reduxForm( {form:'AddMassege'})(AddMessegeForm)
export default Chat