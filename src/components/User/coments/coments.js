import React from 'react';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item.js';
import { reduxForm, Field } from 'redux-form'

const Coments = (props) => {

    const Posts = props.PostsContainer.map((item) => {
        return (
            <ComentItem comentText={item.massege} likeCounter={item.likeCounter} />
        )
    })

    const Textpost = React.createRef();
    const AddPost = (formData) => {
        console.log(formData)
        props.AddPostContainer(formData.NevPost)
    }
    return (
        <div className={c.comments}>
            <div className={c.coment_add}>
                <AddPostReduxForm onSubmit={AddPost} />
                <br />
            </div>
            {Posts}
            <br />
            <br />
        </div>
    )
}

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Новый пост'} name={'NevPost'} component={'input'} />

            </div>
            <div>
                <button>Post</button>
            </div>

        </form>
    )
}
const AddPostReduxForm =reduxForm( {form:'AddPost'})(AddPost)

export default Coments;