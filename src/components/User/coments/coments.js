import React from 'react';
import { InputGroup, InputGroupAddon, Button, } from 'reactstrap';
import c from './coments.module.scss';




const Coments = (props) => {

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
            {props.PostsContainer}
            <br />
            <br />
        </div>
    )
}

export default Coments;