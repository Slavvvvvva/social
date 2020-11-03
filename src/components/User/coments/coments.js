import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item.js';
import { AddPostActionCreator } from '../../../Redax/User-page-reduser';



const Coments = (props) => {


    let Posts = props.wall.userPage.PostsData.map((item) => {
        return (
            <ComentItem comentText={item.massege} likeCounter={item.likeCounter} />
        )
    })

    let AddPost = () => {
        let action = AddPostActionCreator(Textpost.current.value)
        props.Dispatch(action)
        Textpost.current.value = ""
    }

    let Textpost = React.createRef();

    return (
        <div className={c.comments}>
            <div className={c.coment_add}>
                <InputGroup >
                    <input ref={Textpost} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={AddPost} color="secondary">Post</Button>
                    </InputGroupAddon>
                </InputGroup>
                <br />
            </div>
            {Posts}
            <br />
            <br />
        </div>
    )
}

export default Coments;