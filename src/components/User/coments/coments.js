import React from 'react';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item.js';
import { reduxForm, Field, reset } from 'redux-form'
import { validMaxLenght } from '../../../util/validation';
import { TextArea } from '../../Loader/textarea';

const Coments = (props) => {

    const Posts = props.PostsContainer.map((item, i) => {
        return (
            <ComentItem comentText={item.massege} likeCounter={item.likeCounter}  key ={`${i}gjkfjgk`} />
        )
    })

    const AddPost = (formData) => {
        console.log(formData)
        props.AddPostContainer(formData.NevPost)
    }
    return (
        <div className={c.comments}>
            <div className={c.coment_add}>
                <AddPostReduxForm onSubmit={AddPost} />
            </div>
            {Posts}
        </div>
    )
}
const MaxLenght50 = validMaxLenght(50)
const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className = {c.button}>
            <div>
                <Field placeholder={'Новый пост'} name={'NevPost'} component={TextArea} validate ={ [ MaxLenght50]} />
            </div>
            <button>Post</button>
        </form>
    )
}
const afterSubmit = (result, dispatch) => dispatch(reset('AddPost'))
const AddPostReduxForm =reduxForm( {form:'AddPost', onSubmitSuccess: afterSubmit})(AddPost)

export default Coments;