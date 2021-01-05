import React from 'react'
import m from './m.module.scss'
import DialogItem from './dialog-item/dialog-item.js'
import MyMessag from './my-meseges/my-meseges'
import OponentMesage from './oponent-meseges/oponent-meseges'
import { reduxForm, Field, reset } from 'redux-form'
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
        <div className={m.wrapper}>
            <div className={m.user_list}>
                <h6>Activ chat</h6>
                {DialogName}
            </div>
            <div className={m.space}>
                <div className={m.space_messs}>
                    {MyMessageContent}
                </div>
                <AddMassegeReduxForm onSubmit={AddMessege} />
            </div>
        </div>
    )
}
const MaxLenght100 = validMaxLenght(100) 
const AddMessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className = {m.form}>
            <div>
                <Field placeholder={'Massege'} name={'massege'} component={TextArea} validate = {[reqiredField, MaxLenght100]} />
            </div>
            <button>Send</button>
        </form>
    )
}
const afterSubmit = (result, dispatch) => dispatch(reset('AddMassege'))
const AddMassegeReduxForm =reduxForm( {form:'AddMassege', onSubmitSuccess: afterSubmit})(AddMessegeForm)
export default Chat