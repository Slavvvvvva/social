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
            <ComentItem comentText = " Я начал учить реакт и я его закончу" likeCounter = "400"/>
            <ComentItem comentText = " Розобрался с пропсами" likeCounter = "300"/>
            <ComentItem comentText = " Начну скгодня делать страницу с сообщениями" likeCounter = "450"/>
            
            <br />
            <br />
        </div>
    )
}

export default Coments;