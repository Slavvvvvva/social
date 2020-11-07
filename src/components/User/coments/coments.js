import React from 'react';
import { InputGroup, InputGroupAddon, Button, } from 'reactstrap';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item.js';




const Coments = (props) => {
debugger
    const Posts = () => {
        props.PostsContainer.map((item) => {
                return (
                    <ComentItem comentText={item.massege} likeCounter={item.likeCounter} />
                )
            })
    }
    debugger
    let Textpost = React.createRef();
    let AddPost = () => props.AddPostContainer(Textpost)
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