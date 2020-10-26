import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item';

let PostsData = [
    {id:1, massege: "Я начал учить реакт и я его закончу", likeCounter: 500},
    {id:2, massege: "Розобрался с пропсами", likeCounter: 300},
    {id:3, massege: "Начну скгодня делать страницу с сообщениями", likeCounter: 400},
    {id:4, massege: "Научился переключатся между страницами", likeCounter: 500},
    {id:5, massege: "Я сделал страницу с сообщениями", likeCounter: 550},    
]

let Posts = PostsData.map( (item) => {
    return(
        <ComentItem comentText = {item.massege} likeCounter = {item.likeCounter}/>
    )
})

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
            {Posts}    
            <br />
            <br />
        </div>
    )
}

export default Coments;