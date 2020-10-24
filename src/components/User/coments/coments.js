import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item';

const Coments = () => {
    return (
        <div className = {c.comments}>
            <div className = {c.coment_add}>
                <InputGroup>
                    <Input />
                        <InputGroupAddon addonType="append">
                        <Button color="secondary">Post</Button>
                        </InputGroupAddon>
                </InputGroup>
                 <br />
            </div>
            <ComentItem/>
            <ComentItem/>
            <ComentItem/>
            <ComentItem/>
            <ComentItem/>
            <br />
            <br />
        </div>
    )
}

export default Coments;