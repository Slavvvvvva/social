import React from 'react';
import { reduxForm } from 'redux-form';
import {  Field } from 'redux-form'
import { Input } from '../../../Loader/textarea'
import {reqiredField} from '../../../../util/validation'


const UserInfoEditMode = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={props.ConteinerFrends.fullName} name={'fullName'} component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <Field placeholder={props.ConteinerFrends.aboutMe} name={'aboutMe'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <Field type={'checkbox'} name={'lookingForAJob'}  component={Input}/> <p>Ищу роботу?</p>
        </div>
        <div>
            <Field placeholder={props.ConteinerFrends.lookingForAJobDescription} name={'lookingForAJobDescription'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <p>Contacts</p>
        <div>
            <p>facebook</p>
            <Field placeholder={props.ConteinerFrends.contacts.facebook} name={'contacts.facebook'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>website</p>
            <Field placeholder={props.ConteinerFrends.contacts.website} name={'contacts.website'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>vk</p>
            <Field placeholder={props.ConteinerFrends.contacts.vk} name={'contacts.vk'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>twitter</p>
            <Field placeholder={props.ConteinerFrends.contacts.twitter} name={'contacts.twitter'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>instagram</p>
            <Field placeholder={props.ConteinerFrends.contacts.instagram} name={'contacts.instagram'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>youtube</p>
            <Field placeholder={props.ConteinerFrends.contacts.youtube} name={'contacts.youtube'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>github</p>
            <Field placeholder={props.ConteinerFrends.contacts.github} name={'contacts.github'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <div>
            <p>mainLink</p>
            <Field placeholder={props.ConteinerFrends.contacts.mainLink} name={'contacts.mainLink'} type ={'textarea'}  component={Input} validate ={[reqiredField]} />
        </div>
        <button>Send</button>
        
        {props.error && <div>{props.error}</div>}
    </form>
    )
}


 const UserInfoEditModeForm =reduxForm( {form:'EditMode'})(UserInfoEditMode )
 export default UserInfoEditModeForm
