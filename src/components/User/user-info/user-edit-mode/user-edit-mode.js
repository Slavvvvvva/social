import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'
import { Input } from '../../../Loader/textarea'
import { reqiredField } from '../../../../util/validation'
import s from './s.module.scss'


const UserInfoEditMode = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            <h3>Edit user info mode</h3>
            <label for = 'fullName'> Nick Name</label>
            <Field placeholder={props.ConteinerFrends.fullName} id="fullName" name={'fullName'} component={Input} validate={[reqiredField]} />
            <label for = 'aboutMe'> About Me </label>
            <Field placeholder={props.ConteinerFrends.aboutMe} id="aboutMe" name={'aboutMe'} type={'textarea'} component={Input} validate={[reqiredField]} />
                <div>   
                  <Field type={'checkbox'} name={'lookingForAJob'} component={Input} />
                  <p> Locking for a job ?</p>
                </div>
            <label for = 'lookingForAJobDescription'> Job Description </label>
            <Field placeholder={props.ConteinerFrends.lookingForAJobDescription} id="lookingForAJobDescription" name={'lookingForAJobDescription'} type={'textarea'} component={Input} />
            <lebel for = "facebook">facebook</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.facebook} id= 'facebook'  name={'contacts.facebook'} type={'textarea'} component={Input} />
            <lebel for = "website">website</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.website} id= 'facebook'  name={'contacts.website'} type={'textarea'} component={Input} />
            <lebel for = "vk">vk</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.vk} id= 'vk'  name={'contacts.vk'} type={'textarea'} component={Input} />
            <lebel for = "twitter">twitter</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.twitter}  id= 'twitter' name={'contacts.twitter'} type={'textarea'} component={Input} />
            <lebel for = "instagram">instagram</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.instagram} id= 'instagram'  name={'contacts.instagram'} type={'textarea'} component={Input} />
            <lebel for = "youtube">youtube</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.youtube} id= 'youtube'  name={'contacts.youtube'} type={'textarea'} component={Input} />
            <lebel for = "github">github</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.github} id= 'github'  name={'contacts.github'} type={'textarea'} component={Input} />
            <lebel for = "mainLink">mainLink</lebel>
            <Field placeholder={props.ConteinerFrends.contacts.mainLink} id= 'mainLink'  name={'contacts.mainLink'} type={'textarea'} component={Input} />
            <button>Send</button>
            {props.error && <div>{props.error}</div>}
        </form>
    )
}


const UserInfoEditModeForm = reduxForm({ form: 'EditMode' })(UserInfoEditMode)
export default UserInfoEditModeForm
